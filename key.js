const stationObject = {
  zh: {
    hka: "赤鱲角",
    cch: "長洲",
    clearwaterbay: "清水灣",
    hpv: "跑馬地",
    hko: "天文台",
    hkp: "香港公園",
    se1: "啟德跑道公園",
    kausaichau: "滘西洲",
    kp: "京士柏",
    klt: "九龍城",
    ktg: "觀塘",
    lfs: "流浮山",
    ngongping: "昂坪",
    paktamchung: "北潭涌",
    pengchau: "坪洲",
    skg: "西貢",
    sha: "沙田",
    ssp: "深水埗",
    skw: "筲箕灣",
    sek: "石崗",
    sheungshui: "上水",
    sty: "赤柱",
    tkl: "打鼓嶺",
    tailoong: "大隴",
    taimeituk: "大美督",
    taimoshan: "大帽山",
    tpo: "大埔",
    tatescarin: "大老山",
    thepeak: "山頂",
    jkb: "將軍澳",
    ty1: "青衣",
    twn: "荃灣可觀",
    tw: "荃灣城門谷",
    tun: "屯門",
    waglanisland: "橫瀾島",
    hkwetlandpark: "濕地公園",
    hks: "黃竹坑",
    wts: "黃大仙",
    yuenlongpark: "元朗公園",
  },
  en: {
    hka: "Chek Lap Kok",
    cch: "Cheung Chau",
    clearwaterbay: "Clear Water Bay",
    hpv: "Happy Valley",
    hko: "Hong Kong Observatory",
    hkp: "Hong Kong Park",
    se1: "Kai Tak Runway Park",
    kausaichau: "Kau Sai Chau",
    kp: "King's Park",
    klt: "Kowloon City",
    ktg: "Kwun Tong",
    lfs: "Lau Fau Shan",
    ngongping: "Ngong Ping",
    paktamchung: "Pak Tam Chung",
    pengchau: "Peng Chau",
    skg: "Sai Kung",
    sha: "Sha Tin",
    ssp: "Sham Shui Po",
    skw: "Shau Kei Wan",
    sek: "Shek Kong",
    sheungshui: "Sheung Shui",
    sty: "Stanley",
    tkl: "Ta Kwu Ling",
    tailoong: "Tai Loong",
    taimeituk: "Tai Mei Tuk",
    taimoshan: "Tai Mo Shan",
    tpo: "Tai Po",
    tatescarin: "Tate's Cairn",
    thepeak: "The Peak",
    jkb: "Tseung Kwan O",
    ty1: "Tsing Yi",
    twn: "Tsuen Wan Ho Koon",
    tw: "Tsuen Wan Shing Mun Valley",
    tun: "Tuen Mun",
    waglanisland: "Waglan Island",
    hkwetlandpark: "Hong Kong Wetland Park",
    hks: "Wong Chuk Hang",
    wts: "Wong Tai Sin",
    yuenlongpark: "Yuen Long Park",
  },
  district: {
    kowloonCity: {
      name: ["Kowloon City", "九龍城", "九龙城"],
      position: {
        klt: "九龍城",
        se1: "啟德跑道公園",
      },
    },
    taiPo: {
      name: ["Tai Po", "大埔"],
      position: {
        taimeituk: "大美督",
        tpo: "大埔",
      },
    },
    centralAndWestern: {
      name: ["Central and Western", "中西"],
      position: {
        thepeak: "山頂",
        hkp: "香港公園",
      },
    },
    yuenLong: {
      name: ["Yuen Long", "元朗"],
      position: {
        yuenlongpark: "元朗公園",
        sek: "石崗",
        lfs: "流浮山",
        hkwetlandpark: "濕地公園",
      },
    },
    tuenMun: {
      name: ["Tuen Mun", "屯門", "屯门"],
      position: {
        tun: "屯門",
      },
    },
    north: {
      name: ["North District", "北區", "北区"],
      position: {
        sheungshui: "上水",
        tkl: "打鼓嶺",
      },
    },
    saiKung: {
      name: ["Sai Kung", "西貢", "西贡"],
      position: {
        paktamchung: "北潭涌",
        skg: "西貢",
        jkb: "將軍澳",
        kausaichau: "滘西洲",
      },
    },
    shaTin: {
      name: ["Sha Tin", "沙田"],
      position: {
        sha: "沙田",
      },
    },
    eastern: {
      name: ["Eastern District", "東區", "东区"],
      position: {
        skw: "筲箕灣",
      },
    },
    yauTsimMong: {
      name: ["Yau Tsim Mong", "油尖旺"],
      position: {
        hko: "天文台",
        kp: "京士柏",
      },
    },
    southern: {
      name: ["Southern District", "南區", "南区"],
      position: {
        sty: "赤柱",
        hks: "黃竹坑",
      },
    },
    tsuenWan: {
      name: ["Tsuen Wan", "荃灣", "荃湾"],
      position: {
        twn: "荃灣可觀",
        tw: "荃灣城門谷",
      },
    },
    shamShuiPo: {
      name: ["Sham Shui Po", "深水埗"],
      position: {
        ssp: "深水埗",
      },
    },
    wongTaiSin: {
      name: ["Wong Tai Sin", "黃大仙"],
      position: {
        wts: "黃大仙",
      },
    },
    kwaiTsing: {
      name: ["Kwai Tsing", "葵青"],
      position: {
        ty1: "青衣",
      },
    },
    outlyingIslands: {
      name: ["Outlying Islands", "離島", "离岛"],
      position: {
        hka: "赤鱲角",
        pengchau: "坪洲",
        ngongping: "昂坪",
        cch: "長洲",
        waglanisland: "橫瀾島",
      },
    },
    wanChai: {
      name: ["Wan Chai", "灣仔", "湾仔"],
      position: {
        hpv: "跑馬地",
      },
    },
    kwunTong: {
      name: ["Kwun Tong", "觀塘", "观塘"],
      position: {
        ktg: "觀塘",
      },
    },
  },
};

module.exports = stationObject;
