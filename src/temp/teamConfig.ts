export type TeamConfig = {
  healine: string;
  description: string;

  team: {
    img: string;
    name: string;
    position: string;
  }[];
};

export const teamConfig: TeamConfig = {
  healine: "Our leadership",
  description: "From visionary leadership and financial strategists to tech innovators and user experience designers, we're committed to empowering your financial journey with our cutting-edge application.",

  team: [{
    img: "https://www.treasury.gov.ph/wp-content/uploads/2022/01/male-placeholder-image.jpeg",
    name: "Member Name",
    position: "Member position",
  }, {
    img: "https://www.treasury.gov.ph/wp-content/uploads/2022/01/male-placeholder-image.jpeg",
    name: "Member Name",
    position: "Member position",
  }, {
    img: "https://www.treasury.gov.ph/wp-content/uploads/2022/01/male-placeholder-image.jpeg",
    name: "Member Name",
    position: "Member position",
  }, {
    img: "https://www.treasury.gov.ph/wp-content/uploads/2022/01/male-placeholder-image.jpeg",
    name: "Member Name",
    position: "Member position",
  }],
};