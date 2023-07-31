export interface imgI {
    albumId: string,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

export interface Value {
    img: imgI[],
    setImg(a: imgI[]): void,
    albumId: string,
    setAlbumId(c: string): void,
    flexGrid: boolean,
    setFlexGrid(c: boolean): void,
    fetching(value: number): void,
    searchGallery: string,
    setSearchGallary(c: string): void,
    li: number,
    setLi(c: number): void
}