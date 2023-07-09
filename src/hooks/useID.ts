import {useState} from "react";

export function useID(): [number, () => void] {
    const [id, setID] = useState<number>(0);
    
    const increaseID = (): void => {
        setID(id + 1);
    }

    return [id, increaseID];
}