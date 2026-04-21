export interface Post {
    _id: string,
    text: string,
    userID: {
        username: string;
    },
    themeId: {
        themeName: string;
    }, 
    created_at: string
}