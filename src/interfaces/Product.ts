interface Manufacturer {
    id: number;
    name: string;
}

interface Display {
    id: number;
    size_in_zoll: string;
    resolution_in_pixel: string;
    feature: string;
}

interface CPU {
    id: number;
    name: string;
    frequency_in_ghz: number;
    turbo_frequency_in_GHz: number;
    count_amount: number;
}

interface GPU {
    id: number;
    name: string;
    vram_in_gb: number;
    vram_type: string;
}

interface RAM {
    id: number;
    capacity_in_gb: number;
    type: string;
}

interface Storage {
    id: number;
    type: string;
    amount: number;
    capacity_in_gb: number;
}

interface OS {
    id: number;
    name: string;
}

interface Battery {
    id: number;
    capacity_in_wh: string;
}

export interface Product {
    id: number;
    ean: number;
    name: string;
    price: number;
    description: string;
    manufacturer: Manufacturer;
    display: Display;
    cpu: CPU;
    gpu: GPU;
    ram: RAM;
    storage: Storage;
    os: OS;
    battery: Battery;
}
