import { useRouter } from 'next/router';
const solution = (transactions, taxRate) => {
    let numCalls = 0;

    const calculateCostAfterTax = (cost, taxRate) => {
        numCalls = numCalls + 1;
        return cost * taxRate;
    };

    const computeTotal = taxRate => {
        // console.log('computerTotal')
        return cost => {
            console.log('cost')
            return calculateCostAfterTax(cost, taxRate);
        };
    };
    let uniqueTransactions = [...new Set(transactions)];

    uniqueTransactions.map(computeTotal(taxRate));

    return numCalls;
};

export default function transactions() {
    const router = useRouter();

    const calculateIt = (data, e) => {
        solution(data, 1.2)
    }
    return (
        <>
            <div>
                <img
                    src={`${router.basePath}/assets/images/tax.png`}
                    alt="Transactions Challange"
                    width="300"
                />
                <form onSubmit={calculateIt}>
                    <input className="border-2 m-2 p-2" type="text" id="name" name="name" required
                        size="20" />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type="submit">
                        Calculate
                    </button>
                </form>
            </div>
        </>
    )
}