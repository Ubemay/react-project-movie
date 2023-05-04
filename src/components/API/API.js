const token = '56888a5b-8343-472a-919c-c7785fa39f78';

export async function getAll(page) {
    const url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=' + page;
    const resp = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": token,
        },
    });
    return await resp.json();
}
export async function getFilm(id) {
    const url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/' + id;
    const resp = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": token,
        },
    });
    return await resp.json();
}


export async function getFilmVideos(id) {
    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/videos`;
    const resp = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": token,
        },
    });
    return await resp.json();
}
export async function getFilmImages(id) {
    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/images?type=STILL&page=1`;
    const resp = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": token,
        },
    });
    return await resp.json();
}
export async function getStaff(id) {
    const url = `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${id}`;
    const resp = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": token,
        },
    });
    return await resp.json();
}
export async function getFilmBudget(id) {
    const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/box_office`;
    const resp = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": token,
        },
    });
    return await resp.json();
}
