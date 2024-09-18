interface HasChildren {
    children?: React.ReactNode
}

interface PersonHasChildren extends HasChildren {
    name?: string,
    favoriteNumber?: number,
}

interface Person {
    name?: string,
    favoriteNumber?: number,
}

interface State {
    number: number;
}