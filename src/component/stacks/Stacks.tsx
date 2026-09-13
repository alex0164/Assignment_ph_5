import { use, useState } from "react";
import type { Istack } from "../../types/stack";
import YourStacks from "./YourStacks";
import { toast } from "react-toastify";

interface StacksProps {
    StacksPromise: Promise<Istack[]>
}

const Stacks = ({ StacksPromise }: StacksProps) => {

    const stacks = use(StacksPromise);
    const [selectedStacks, setSelectedStacks] = useState<Istack[]>([]); 


    const handleAddToStack = (stack: Istack) => {
        if (!selectedStacks.some(s => s.id === stack.id)) {
            setSelectedStacks([...selectedStacks, stack]);
            toast.success(`${stack.name} added to your stack!`);
        }
    };

   return (
    <div className="container mx-auto mt-4">
        <div className="flex gap-6 items-start">
            <div className="grid grid-cols-3 gap-3 flex-1 max-w-5xl">
                {stacks.map((stack: Istack) => {
                    return (
                        <div className="flex flex-col gap-3 p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow" key={stack.id}>
                            <div className="flex items-center justify-between">
                                <img src={stack.icon} alt={stack.name} className="w-10 h-10 object-contain" />
                            </div>

                            <h3 className="text-lg font-bold text-gray-900">{stack.name}</h3>
                            <p className="text-sm text-gray-500">{stack.description}</p>

                            <div className="flex items-center gap-3 text-xs text-gray-600">
                                <span className="px-2 py-1 rounded-full bg-gray-100">
                                    {stack.category}
                                </span>
                                <span className="px-2 py-1 rounded-full bg-gray-100">
                                    {stack.difficulty}
                                </span>
                                <span className="flex items-center gap-1 text-yellow-500">
                                    ★ {stack.rating}
                                </span>
                            </div>

                            <button  
                                className="mt-2 w-full py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                                onClick={() => handleAddToStack(stack)}
                            >
                                Add to Stack
                            </button>
                        </div>
                    );
                })}
            </div>

             <span className="text-1xl text-gray-950">
                <YourStacks
                    selectedStacks={selectedStacks}
                    setSelectedStacks={setSelectedStacks}
                />
            </span>
        </div>
    </div>
);
       
    
};

export default Stacks;