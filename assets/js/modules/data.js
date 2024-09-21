const user = {
    UserId: "bad79324-c345-11ec-9d64-0242ac120002",
    UserName: "Matheus Almeida",
    Description: "",
    ImageProfile: "./assets/image/matheus-almeida-costa-cartoon.jpg"
}

const resources = [
    {
        ServiceName: "Portfolio",
        PersonalURL: "https://almeidamatheus.me/",
        PrimaryColor: "#323232",
        IconFontawesome: "fa-solid fa-user",
        // IconFontawesome: "fa-solid fa-user-tie",
        TypeService: "Social",
        Nickname: "",
        Visibility: "Visible"
    },
    {
        ServiceName: "Linkedin",
        PersonalURL: "https://www.linkedin.com/in/matheus-almeida-costa/",
        PrimaryColor: "#3b5999",
        IconFontawesome: "fa-brands fa-linkedin-in",
        TypeService: "Social",
        Nickname: "Matheus Almeida Costa",
        Visibility: "Visible"
    },
    {
        ServiceName: "GitHub",
        PersonalURL: "https://github.com/almeida-matheus",
        PrimaryColor: "#333333",
        IconFontawesome: "fa-brands fa-github",
        TypeService: "Social",
        Nickname: "almeida-matheus",
        Visibility: "Visible"
    },
    {
        ServiceName: "Dev.to",
        PersonalURL: "https://dev.to/almeidamatheus/",
        PrimaryColor: "#1E3050",
        IconFontawesome: "fa-brands fa-dev",
        TypeService: "Social",
        Nickname: "almeidamatheus",
        Visibility: "Visible"
    },
    {
        ServiceName: "Blog",
        PersonalURL: "https://blog.almeidamatheus.me/",
        PrimaryColor: "#01633e",
        // IconFontawesome: "fa-solid fa-book",
        // IconFontawesome: "fa-solid fa-newspaper",
        IconFontawesome: "fa-solid fa-square-pen",
        TypeService: "Social",
        Nickname: "",
        Visibility: "Visible"
    },
    {
        ServiceName: "Medium",
        PersonalURL: "https://almeida-matheus.medium.com/",
        PrimaryColor: "#009F00",
        IconFontawesome: "fa-brands fa-medium-m",
        TypeService: "Social",
        Nickname: "almeida-matheus",
        Visibility: "Hidden"
    },
    {
        ServiceName: "Youtube",
        PersonalURL: "https://www.youtube.com/c/matheusalmeidac",
        PrimaryColor: "#c4302b",
        IconFontawesome: "fa-brands fa-youtube",
        TypeService: "Social",
        Nickname: "Matheus Almeida",
        Visibility: "Visible"
    },
    {
        ServiceName: "Udemy",
        PersonalURL: "https://udemy.com/user/matheus-almeida-costa/",
        PrimaryColor: "#B42FE9",
        // IconFontawesome: "fa-sharp fa-solid fa-caret-up",
        // IconFontawesome: "fa-solid fa-u",
        IconFontawesome: "fa-solid fa-angle-up",
        IconCustomSvg: '<svg width="26px" height="26px" viewBox="0 0 412.77 799.91" xmlns="http://www.w3.org/2000/svg" width="1290" height="2500"><path d="M412.74 238.2l-206.4-119.1L0 238.2V119.1L206.37 0l206.4 119.1v119.1z" fill="#a435f0"/><path d="M0 338.22h108.11v262.54c0 67.83 50.67 100.9 98.26 100.9 48 0 98.3-33.95 98.3-101.81V338.22h108.1v268.8c0 62.48-19.65 110.7-58.96 143.76-39.33 33.04-88.45 49.13-148.35 49.13-59.84 0-108.99-16.06-147.38-49.13C19.65 717.75 0 671.32 0 609.69z"/></svg>',
        TypeService: "Social",
        Nickname: "matheus-almeida-costa",
        Visibility: "Visible"
    },
    {
        ServiceName: "Credly",
        PersonalURL: "https://www.credly.com/users/matheus-almeida-costa/badges?sort=-state_updated_at",
        PrimaryColor: "#FF6A00",
        IconFontawesome: "fa-solid fa-certificate",
        IconCustomSvg: '<svg width="26px" height="26px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><circle cx="512" cy="512" r="512" style="fill:#f36c21"/><path d="M671.2 371.6h3c3.7.3 7.4 2.1 9.7 5 3.4 4.2 4.3 9.8 4.6 15.1.8 16.1-2.7 32.1-7.3 47.5-5.9 20.4-14.2 40-21 60.1-1.2 3.5-2.4 7.1-3.3 10.7-1.5 6-1.3 12.3-1.5 18.5-.2 5.8.2 11.6 1.3 17.3.6 3.1 1.9 6.4 4.3 8.6 2.2 2 5.4 2.9 8.3 2 3.9-1.2 7-4.2 9.8-7.1 3.9-4.3 7.6-8.7 10.3-13.8 3.8-6.8 6-14.3 7.1-22 1.5-11.6 2.7-23.4 6.9-34.4 1.6-4.2 3.6-8.5 7.4-11.1 5.1-3.6 12.8-2.1 16.7 2.7 1.9 2.4 2.4 5.5 2.4 8.4-.2 3.9-1 7.8-2.3 11.5-4.5 13.2-7.1 27.1-6.6 41.1.1 3.2.4 6.6 2.1 9.5 1.4 2.4 3.8 4.3 6.6 4.3 3.2 0 6-1.9 8-4.2 3.1-3.5 5.6-7.5 7.6-11.7 4-8.5 5.9-17.8 7.6-27 1.4-7.8 2.8-15.6 5-23.2 1.2-3.9 2.7-7.8 5.6-10.8 1.9-2.1 4.8-2.9 7.5-2.9 2.8.1 5.4 1.7 7.3 3.8 2.6 2.9 3.1 6.9 2.8 10.6-2.8 22.1-5.9 44.2-8.4 66.3-1.8 13.8-3.4 27.6-4.6 41.4-.1 1.5 1.7 2.4 2.7 1.4 7.2-6.9 14.3-14.1 19.7-22.5 2.5-3.8 4.3-7.9 6.7-11.7 1-1.7 2.2-3.4 4.1-4 2.9-1.4 6.6-1 9.1 1 1.9 1.4 2.9 3.7 3.2 6v2.7c-.6 4.6-3.3 8.5-5.3 12.5-5.5 11-13.1 21-22.6 28.9-6.8 5.8-14.8 10.2-23.2 13.2-.5.2-1.3.3-1.4 1-3.1 12.7-10 24.4-19.3 33.5-10.3 10.2-23.6 17.2-37.7 20.5-7.7 1.7-15.8 2.4-23.6 1-8-1.5-15.8-5.2-21.5-11-5.2-5.2-8.7-12.1-9.3-19.5-.6-6.7 1.1-13.5 4.3-19.4 3.7-6.7 9.3-12.3 15.9-16.2 6.3-3.8 13.5-5.6 20.6-6.5 8.1-.9 16.4-.9 24.6-.2 5.1.4 10.2.9 15.3 1.3 2.8.2 5.9 1.2 8.6-.2 1.9-.9 2.5-3.2 2.8-5.1 1.2-9 3-18.1 1.9-27.3-.2-1.2-.5-3-2-3.1-1.8.8-2.7 2.7-3.7 4.3-3.1 6-8.9 10.6-15.6 11.9-6.7 1.3-14-2.1-17.1-8.1-1.5-2.5-2.2-5.5-4.4-7.6-1.5-1.4-3.7-1.4-5.5-.6-3.2 1.4-5.3 4.3-7.9 6.5-6.8 6.1-15.4 10.7-24.7 11.2-10.8.7-21.9-5.4-26.4-15.4-.6-1.4-1.1-3.4-2.9-3.6-2-.3-3.5 1.3-4.6 2.7-5.3 6.7-10.3 13.9-17.3 18.9-4.5 3.2-9.9 5.4-15.5 5.3-5.9-.1-11.8-3.3-14.6-8.5-1.3-2.3-1.8-5.2-3.9-7-1.6-1.4-4.1-1.2-5.8-.1-2.6 1.5-4.1 4.2-6.2 6.3-5.8 5.8-14.2 8.7-22.3 7.9-9.8-1-18.7-7.8-22.3-17-.5-1.3-1.2-2.8-2.6-3.2-1.1-.4-2 .4-2.7 1.1-5.4 5-10.8 10.1-17.3 13.6-6.6 3.5-13.9 5.8-21.4 5.6-7.9.1-15.8-2.3-22.2-6.8-5.4-3.7-9.7-8.9-12.2-15-.7-1.6-1.6-3.4-3.4-3.8-1.6-.4-3 .8-3.9 2-2.7 3.8-6.2 7.1-10.1 9.6-6 3.9-13 6.6-20.3 6.6-5.6 0-11.2-2.1-15.2-6-4.3-4.2-6.6-10.1-7.5-16-1.1-7.7.5-15.5 2.7-22.8 1.4-4.8 3.2-9.4 4.3-14.3.6-2.5.8-5.2-.3-7.5-.9-1.8-2.8-2.9-4.6-3.7-2-.8-4.1.3-5.5 1.6-1.4 1.3-2.1 3-2.9 4.7-4.9 11.8-11.5 22.9-19.6 32.8-7.8 9.6-17.1 17.9-27.1 25.2-11.4 8.1-24.5 14-38.4 15.9-10.1 1.4-20.6.6-30.4-2.3-5.8-1.7-11.5-4.1-16.5-7.6-8.6-6-15.5-14.3-20.4-23.5-3.8-7.1-6.7-14.7-8.8-22.5-2.9-11.1-3.9-22.5-4.4-33.9v-7.8c.2-8.4 1-16.8 2.7-25 3-14.9 8.4-29.2 15.7-42.5 5.8-10.4 12.7-20.2 21.4-28.3 9.5-8.9 21-15.8 33.7-18.6 12.1-2.7 25.1-2 36.4 3.2 3.4 1.5 6.4 3.7 10 4.8 2.5.8 5.4.5 7.5-1.1 3.2-2.5 4.7-6.5 7.4-9.5 3.4-3.7 8.9-5.2 13.7-3.8 4.5 1.3 8 5.2 9.1 9.7.7 3 .3 6.1-.6 9-1.4 4.1-3.7 7.8-5.9 11.5-7.3 12.6-12.8 26.2-16.3 40.3-1.1 4.3-2 8.8-3.7 12.9-1.6 3.9-4.1 7.6-7.7 10-3.1 2.1-7.2 3.1-10.9 2-3.4-1-6-3.8-7.4-7-1.6-3.4-2.1-7.3-1.6-11.1 1-8.9 5.9-17 6.1-26.1.2-5.1-1.5-10.4-5.5-13.7-5.6-4.8-13.5-6.1-20.6-5.1-8.4 1.1-16.3 5.1-22.5 10.8-6.7 6.2-11.7 14-15.7 22.1-11.6 23.2-16.7 49.8-13.7 75.6 1 8.4 3 16.8 7 24.4 2.5 4.8 5.8 9.1 9.9 12.5 5.3 4.4 11.7 7.4 18.5 8.7 9.7 1.9 19.9.6 29-2.9 12.2-4.7 22.8-13.1 31.2-23 4.5-5.1 8.4-10.7 12.2-16.4 3.8-5.3 7.8-10.9 9.3-17.4 1-4.3.1-8.7-.9-12.9-.7-5.8 1.5-11.7 5.3-16 2.4-2.5 5.4-4.8 8.9-5.5 3.3-.6 7 0 9.8 2.1 3.1 2.2 4.7 6.4 3.6 10.1-.7 2.4-1.5 4.9-.8 7.4.7 2.1 2.8 3.4 4.9 3.5 4.8.4 9.8-.5 14.4 1.1 5.4 2.1 10.2 6.4 12 12.1 1.2 3.8 1.6 8.1.4 11.9-2.1 7.4-4.7 14.7-6.1 22.3-.4 2.5-.8 5.1-.1 7.6.4 1.8 2 3.4 3.9 3.5 3.3.3 6.3-1.5 8.6-3.7 4.7-4.7 7.8-10.7 10-16.9 2.7-7.5 4.1-15.4 6.1-23.1 2.1-7.9 5.3-15.6 10.3-22.1 7.4-9.8 19.4-16.1 31.8-15.8 6.9.1 13.7 2.8 18.6 7.8 4.1 4.2 6.3 9.9 7.2 15.7 1.5 9.8-.3 20.1-4.8 29-6.2 12.2-18.9 20.9-32.6 22-2 .2-4.3.1-5.8 1.6-1.3 1.3-1.2 3.3-1 5 .5 4.6 2 9.3 5.1 12.9 3.6 3.7 9 6.3 14.3 5.1 6.1-1.3 11.3-5.2 15.6-9.4 4.1-4.1 7.7-8.7 11-13.5 4.6-6.6 7.4-14.2 10.2-21.6 2.7-7.3 5.2-14.7 9.7-21.1 3.6-5.4 8.3-10.1 13.9-13.5 6.2-3.9 13.6-5.9 21-5.5 2.3.1 4.9.2 6.8-1.2 1.7-1.3 2.3-3.6 2.3-5.7 0-3.8.4-7.5.7-11.3.5-5.9 1-11.8 1.8-17.6 1.7-14.6 4.7-29 8.6-43.1 2-7.1 4.6-14.3 9.1-20.3 1.9-2.7 4.2-5.3 7.2-6.9 2.9-1.7 6.6-1.6 9.7-.7 4 1.2 6.6 5 8.2 8.6 2.9 7.1 2.1 15 1.5 22.5-.8 11.8-3.6 23.4-6 35-2.1 10.2-3.8 20.5-5.7 30.7-2.6 14-5.1 28.1-7.7 42.1-2.2 11.5-4.7 23.2-3.3 35 .4 3.1.8 6.5 2.9 8.9 1.5 1.7 4 2.1 6 1.4 2.7-.9 4.6-3.3 6-5.7 3.3-5.6 6.2-11.5 9.1-17.4 4.2-8.2 8.4-16.7 9.8-25.9 2.2-14 3.7-28.2 5.7-42.3 1.6-10.5 3.4-21 5.1-31.4 2.1-13.1 4.5-26.1 8.2-38.8 1.8-6 4.2-11.9 8.4-16.6 3.8-3.8 8.3-6.5 13.3-7zM478 487.8c-2 .6-3.6 2.2-4.9 3.8-2.9 3.7-5.1 7.9-6.6 12.4-1.6 4.8-3.1 9.8-2.5 14.8.1 1.5 1.6 2.6 3 2.6 2.7.1 5.1-1.4 7.2-3 4.7-3.3 7.7-8.4 9.8-13.6 1.3-3.3 2.2-6.9 1.9-10.5-.2-2.4-1.4-4.9-3.5-6.1-1.3-.8-3-.9-4.4-.4zm85.7 11.2c-5.6 1-10.6 4.3-14.2 8.7-3.9 4.7-6.6 10.4-8 16.4-2.1 8.5-2.3 17.5 0 26 .7 2.6 1.9 5.2 3.9 7.1 1.3 1.3 3.1 2 4.9 2.1 4.7.7 9.1-1.9 12.7-4.6 4.5-3.3 7.4-8.2 9.2-13.4 1.1-3.2.4-6.6.1-9.9-.5-6.7-.5-13.4-.1-20.1.1-2.3.8-4.5.8-6.8 0-1.8-.7-3.8-2.4-4.8-2.1-1.3-4.6-1.1-6.9-.7zm133.7 119.6c-4.8.3-9.6 1.3-14.1 3.2-4.9 2-9.1 5.7-11.2 10.5-1.4 3-2 6.6-.5 9.6 1.5 3.1 4.3 5.4 7.4 6.8 4.3 1.9 9.1 2.2 13.6 1.7 14.2-1.6 27.7-8.9 36.7-20 1.8-2.2 3.2-4.7 4.7-7.1.4-.8 1-2.1.1-2.8-1.1-.8-2.5-.5-3.7-.5-5.1-.3-10.2-.8-15.3-1-5.9-.3-11.8-.8-17.7-.4z" style="fill:#fff"/></svg>',
        TypeService: "Social",
        Nickname: "matheus-almeida-costa",
        Visibility: "Visible"
    },
    {
        ServiceName: "Instagram",
        PersonalURL: "https://www.instagram.com/almeidamatheus.me/",
        PrimaryColor: "#E1306C",
        IconFontawesome: "fa-brands fa-instagram",
        TypeService: "Social",
        Nickname: "almeidamatheus.me",
        Visibility: "Visible"
    },
    {
        ServiceName: "Spotify",
        PersonalURL: "https://open.spotify.com/user/toycbdrujjrwpyk66pusui1hl",
        PrimaryColor: "#1DB954",
        IconFontawesome: "fa-brands fa-spotify",
        TypeService: "Social",
        Nickname: "Matheus Almeida",
        Visibility: "Visible"
    },
    {
        ServiceName: "YT Music",
        PersonalURL: "https://music.youtube.com/channel/UCGke88VCjj799vKSbBGW64g",
        PrimaryColor: "#c4302b",
        IconFontawesome: "fa-brands fa-youtube",
        TypeService: "Social",
        Nickname: "Matheus Almeida",
        Visibility: "Hidden"
    },
    {
        ServiceName: "Maps",
        PersonalURL: "https://www.google.com/maps/contrib/107070103045043710523",
        PrimaryColor: "#de4d3e",
        // IconFontawesome: "fa-brands fa-google",
        // IconFontawesome: "fa-solid fa-map-location-dot",
        IconFontawesome: "fa-solid fa-location-dot",
        TypeService: "Social",
        Nickname: "Matheus Almeida",
        Visibility: "Hidden"
    },
    {
        ServiceName: "Steam",
        PersonalURL: "https://steamcommunity.com/id/shiryunk/",
        PrimaryColor: "#171a21",
        IconFontawesome: "fa-brands fa-steam",
        TypeService: "Social",
        Nickname: "shiryunk",
        Visibility: "Visible"
    },
    {
        ServiceName: "Discord",
        PersonalURL: "https://discordapp.com/users/shiryu#2186",
        PrimaryColor: "#7289da",
        IconFontawesome: "fa-brands fa-discord",
        TypeService: "Social",
        Nickname: "shiryu#2186",
        Visibility: "Hidden"
    },
    {
        ServiceName: "Telegram",
        PersonalURL: "https://t.me/almeidamatheus",
        PrimaryColor: "#0088cc",
        IconFontawesome: "fa-brands fa-telegram-plane",
        TypeService: "Social",
        Nickname: "almeidamatheus",
        Visibility: "Hidden"
    },
    {
        ServiceName: "E-mail",
        PersonalURL: "mailto:contato@almeidamatheus.me",
        PrimaryColor: "#004f9f",
        IconFontawesome: "fa-solid fa-envelope",
        TypeService: "Social",
        NickName: "contato@almeidamatheus.me",
        Visibility: "Visible"
    },
    {
        ServiceName: "Twitter",
        PersonalURL: "https://twitter.com/almeidamatheusm",
        PrimaryColor: "#1DA1F2",
        IconFontawesome: "fa-brands fa-twitter",
        TypeService: "Social",
        Nickname: "almeidamatheusm",
        Visibility: "Hidden"
    },
    {
        ServiceName: "Pinterest",
        PersonalURL: "https://br.pinterest.com/almeidamatheus_/",
        PrimaryColor: "#E60023",
        IconFontawesome: "fa-brands fa-pinterest",
        TypeService: "Social",
        NickName: "",
        Visibility: "Hidden"
    },
    {
        ServiceName: "Ubi Connect/Uplay",
        PersonalURL: "",
        PrimaryColor: "#323232",
        IconFontawesome: "fa-solid fa-gamepad",
        TypeService: "Social",
        NickName: "shiryunk",
        Visibility: "Hidden"
    },
    {
        ServiceName: "EA Play/Origin",
        PersonalURL: "",
        PrimaryColor: "#323232",
        IconFontawesome: "fa-solid fa-gamepad",
        TypeService: "Social",
        NickName: "shiryunk",
        Visibility: "Hidden"
    },
    {
        ServiceName: "Epic Games",
        PersonalURL: "https://store.epicgames.com/pt-BR/u/8429accacaa24c7f9cfb30042d7ad2c0",
        PrimaryColor: "#323232",
        IconFontawesome: "fa-solid fa-gamepad",
        TypeService: "Social",
        NickName: "CharlieBrownJr",
        Visibility: "Hidden"
    },
    {
        ServiceName: "Battle.net",
        PersonalURL: "",
        PrimaryColor: "#323232",
        IconFontawesome: "fa-solid fa-gamepad",
        TypeService: "Social",
        NickName: "MatheusCBJR#1347",
        Visibility: "Hidden"
    },
    {
        ServiceName: "GOG",
        PersonalURL: "https://www.gog.com/u/CharlieBrownJr",
        PrimaryColor: "#323232",
        IconFontawesome: "fa-solid fa-gamepad",
        TypeService: "Social",
        NickName: "CharlieBrownJr",
        Visibility: "Hidden"
    },
    {
        ServiceName: "Riot",
        PersonalURL: "",
        PrimaryColor: "#323232",
        IconFontawesome: "fa-solid fa-gamepad",
        TypeService: "Social",
        NickName: "shiryunk#1234",
        Visibility: "Hidden"
    },
    {
        ServiceName: "Xbox",
        PersonalURL: "https://account.xbox.com/pt-BR/Profile?xr=mebarnav&activetab=main:mainTab2",
        PrimaryColor: "#107C10",
        IconFontawesome: "fa-solid fa-gamepad",
        TypeService: "Social",
        NickName: "ICharlieBrownJr",
        Visibility: "Hidden"
    },
    {
        ServiceName: "Gitlab",
        PersonalURL: "https://gitlab.com/almeidamatheus",
        PrimaryColor: "#107C10",
        IconFontawesome: "fa-solid fa-gitlab",
        TypeService: "Social",
        NickName: "almeidamatheus",
        Visibility: "Hidden"
    }
]

export {
    user,
    resources
}