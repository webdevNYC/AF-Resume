import fs from 'fs';
import path from 'path';

function buildNotesPath() {
    return path.join(process.cwd(), 'data', 'notes.json');
}

function extractNotes(filePath) {
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    return data
}

function handler(req, res) {
    if (req.method === 'POST') {
        const dataReq = req.body;
        const { title, message, slug, className } = dataReq;

        //store that in a database 
        const filePath = buildNotesPath();
        const data = extractNotes(filePath);

        const newNote = {
            slug: slug,
            title: title,
            message: message,
            className: className,
            lastModified: new Date(Date.now())
        };

        // replace the old note to the new one based on slug
        const newData = data.map(el => (el.slug === slug ? { ...newNote } : el))

        fs.writeFileSync(filePath, JSON.stringify(newData));
        res.status(201).json({ message: 'Success!', updatedData: data });

    }
    else {
        const filePath = buildNotesPath();
        const data = extractNotes(filePath);
        res.status(200).json({ ...data });
    }
}

export default handler;