import v4 from 'uuid/v4';

const films = [
    {
        id: v4(),
        title: "Star Wars",
        description: "The Imperial Forces -- under orders from cruel Darth Vader (David Prowse) -- hold Princess Leia (Carrie Fisher) hostage, in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker (Mark Hamill) and Han Solo (Harrison Ford), c etc...",
        userRating: 7,
        tags: ["sci-fi", "drama", "action"]
    },
    {
        id: v4(),
        title: "Jaws",
        description: "When a young woman is killed by a shark while skinny-dipping near the New England tourist town of Amity Island, police chief Martin Brody (Roy Scheider) wants to close the beaches, but mayor Larry Vaughn (Murray Hamilton) overrules him, fearing that etc...",
        userRating: 6,
        tags: ["drama", "action", "horror"]
    },
    {
        id: v4(),
        title: "Conan",
        description: `Orphaned boy Conan (Arnold Schwarzenegger) is enslaved after his village is destroyed by the forces of vicious necromancer Thulsa Doom (James Earl Jones), and is compelled to push "The Wheel of Pain" for many years. Once he reaches adulthood, Conan s etc...`,
        userRating: 7,
        tags: ["action"]
    },
    {
        id: v4(),
        title: "The House",
        description: "Scott and Kate Johansen must figure out a way to earn some money after their daughter's scholarship falls through. When all else fails, the desperate couple join forces with their neighbor Frank to start an underground casino in his home. As the cash etc ...",
        userRating: 5,
        tags: ["comedy"]
    },
    {
        id: v4(),
        title: "Training Day",
        description: `Police drama about a veteran officer who escorts a rookie on his first day with the LAPD's tough inner-city narcotics unit. "Training Day" is a blistering action drama that asks the audience to decide what is necessary, what is heroic and what crosse etc...`,
        userRating: 9,
        tags: ["drama", "thriller"]
    }
];

export default films;