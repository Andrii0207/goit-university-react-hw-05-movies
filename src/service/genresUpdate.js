export function genresUpdate(data) {
    const genres = []
    data.map(({ name }) => genres.push(name))
    return genres.join(" ");
}