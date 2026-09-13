//  its a side bar where i will add the stacks by clicking the add to stack button in the stacks.tsx file and can remove the stacks from the sidebar and can also see the total number of stacks added in the sidebar as 5 technologies selected instead of "No technologies selected yet."
import React from 'react';
import type { Istack } from '../../types/stack';
import { X } from "lucide-react";
import { toast } from "react-toastify";
const YourStacks = ({
    selectedStacks,
    setSelectedStacks,
}: {
    selectedStacks: Istack[];
    setSelectedStacks: React.Dispatch<React.SetStateAction<Istack[]>>;
}) => {
    const totalSelected = selectedStacks.length;

    return (
        <div className="space-y-3 p-4 rounded-xl border border-gray-200 shadow-sm bg-white">
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Your Stacks</h3>
                {totalSelected > 0 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                        {totalSelected} {totalSelected === 1 ? "technology" : "technologies"}
                    </span>
                )}
            </div>

            {totalSelected === 0 ? (
                <div className="text-sm text-gray-400 py-4 text-center">
                    No technologies selected yet.
                </div>
            ) : (
                <div className="flex flex-col gap-2">
                    {selectedStacks.map((stack) => (
                        <div
                            key={stack.id}
                            className="flex items-center justify-between gap-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm font-medium text-gray-900 truncate">
                                    {stack.name}
                                </span>
                                <span className="text-xs text-gray-500">{stack.category}</span>
                            </div>
                           <button
    onClick={() => {
        setSelectedStacks((current) =>
            current.filter((s) => s.id !== stack.id)
        );
        toast.info(`${stack.name} removed from your stack.`);
    }}
    className="shrink-0 p-1 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
    aria-label={`Remove ${stack.name}`}
>
    <X size={16} />
</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default YourStacks;