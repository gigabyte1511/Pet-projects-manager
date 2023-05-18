export interface TechnologyStack {
    name: string
    labelURL: string
}

export interface ProjectInfo {
    name: string
    date: string
    images: string[]
    mainDiscription: string
    discription: string
    gitHubURL: string
    projectURL: string
    technologyStack: TechnologyStack[]
}
