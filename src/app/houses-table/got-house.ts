export class GotHouse {
    constructor(name: string, region: string, coatOfArms: string, words: string){
        this.name = name;
        this.region = region;
        this.coatOfArms = coatOfArms;
        this.words = words;
    }

    url: string;
    name: string;
    region: string;
    coatOfArms: string;
    words: string;
    titles: Array<string>;
    seats: Array<string>;
    currentLord: string;
    heir: string;
    overlord: string;
    founded: string;
    founder: string;
    diedOut: string;
    ancestralWeapons: Array<string>;
    cadetBranches: Array<string>;
    swornMembers: Array<string>;
}
