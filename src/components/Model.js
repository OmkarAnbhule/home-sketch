import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ModelIcon } from "./Icons";
import dynamic from "next/dynamic";
import { Button } from "./ui/button";

// Correct the dynamic import function
const ModelViewer = dynamic(() => import('./ModelViewer'), { ssr: false });

export function Model({ model }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-fit h-fit p-3 bg-[rgba(255,255,255,0.13)] dark:bg-[rgba(0,0,0,0.43)] backdrop-blur-lg border-none outline-none stroke-black dark:stroke-white">
                    <ModelIcon />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Beach House</DialogTitle>
                    <DialogDescription>
                        Use Mouse cursor to interact
                    </DialogDescription>
                </DialogHeader>
                <div className="w-full h-[300px] border-2 rounded-lg flex justify-center">
                    {/* Pass the 'model' prop to ModelViewer */}
                    <ModelViewer model={model} />
                </div>
                <DialogFooter>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
