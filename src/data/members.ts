export interface MemberPosition {
  title: string;
  year: number;
}

export interface Member {
  id: string;
  fullName: string;
  photoUrl?: string;
  membershipNumber: string;
  occupation: string;
  email: string;
  phoneNumber: string;
  positions: MemberPosition[];
}

export const dummyMembers: Member[] = [
  {
    id: "1",
    fullName: "Srimal Wijesekera",
    membershipNumber: "RC-1001",
    occupation: "Lawyer",
    email: "srimalwijesekera@gmail.com",
    phoneNumber: "0777304272",
    positions: [
      { title: "Secretary", year: 2026 },
      { title: "Secretary", year: 2025 },
      { title: "Committee Member", year: 2024 },
      { title: "Vice President", year: 2022 },
      { title: "Vice President", year: 2019 }
    ]
  },
  {
    id: "2",
    fullName: "Mr. B. Sooriarachchi",
    membershipNumber: "",
    occupation: "Retired Principal",
    email: "",
    phoneNumber: "",
    positions: [
      { title: "Patron", year: 2026 },
      { title: "Patron", year: 2025 },
      { title: "Patron", year: 2024 },
      { title: "Patron", year: 2023 },
      { title: "Patron", year: 2022 },
      { title: "Patron", year: 2019 }
    ]
  },
  {
    id: "3",
    fullName: "Lt.Con.G.V.S.B.Shanthisiri",
    membershipNumber: "",
    occupation: "Retired Lieutenant Colonel",
    email: "",
    phoneNumber: "",
    positions: [
      { title: "Vice Patron", year: 2026 },
      { title: "Vice Patron", year: 2025 },
      { title: "Vice Patron", year: 2024 },
      { title: "Vice Patron", year: 2023 },
      { title: "Vice Patron", year: 2022 },
      { title: "Vice Patron", year: 2019 }
    ]
  }
];
