import { SampleStorage } from "./mongo/user"
console.log(SampleStorage)
interface IStorage {
    sample: SampleStorage
}

export let storage: IStorage = {
    sample: new SampleStorage()
}



