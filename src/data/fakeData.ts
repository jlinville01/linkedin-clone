export interface User {
  id: number;
  name: string;
  headline: string;
  avatar: string;
  connections: number;
  company?: string;
}

export interface Post {
  id: number;
  userId: number;
  content: string;
  timestamp: Date;
  likes: number;
  comments: Comment[];
  reposts: number;
  image?: string;
  isLiked?: boolean;
}

export interface Comment {
  id: number;
  userId: number;
  content: string;
  timestamp: Date;
}

const firstNames = [
  "Sarah", "Michael", "Emma", "James", "Olivia", "William", "Ava", "David",
  "Sophia", "Robert", "Isabella", "John", "Mia", "Daniel", "Charlotte",
  "Matthew", "Amelia", "Jennifer", "Christopher", "Emily"
];

const lastNames = [
  "Johnson", "Smith", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis",
  "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson",
  "Thomas", "Taylor", "Moore", "Jackson", "Martin"
];

const jobTitles = [
  "Senior Product Manager", "Software Engineer", "Marketing Director", 
  "Data Scientist", "UX Designer", "Sales Manager", "HR Business Partner",
  "Financial Analyst", "Content Strategist", "Operations Manager",
  "Frontend Developer", "Backend Engineer", "Full Stack Developer",
  "Chief Technology Officer", "VP of Engineering", "Business Development Manager",
  "Digital Marketing Specialist", "Account Executive", "Project Manager",
  "Customer Success Manager"
];

const companies = [
  "TechCorp", "Microsoft", "Google", "Amazon", "Meta", "Apple", "Netflix",
  "Salesforce", "Adobe", "Oracle", "IBM", "Intel", "Cisco", "PayPal",
  "LinkedIn", "Twitter", "Uber", "Airbnb", "Stripe", "Shopify"
];

const postTemplates = [
  "Excited to announce that I'm starting a new position as {title}!",
  "Just wrapped up an amazing quarter with my team. Proud of what we've accomplished! 🚀",
  "Looking for talented {title}s to join our growing team. DM me if interested!",
  "5 years at {company} today! Grateful for the journey and amazing colleagues.",
  "Thrilled to share that our project just launched! Check it out and let me know what you think.",
  "Important lessons learned from leading a team through rapid growth...",
  "The future of tech is here. Here's what I'm seeing in the industry...",
  "Congratulations to my team on shipping this incredible feature!",
  "Just published a new article on leadership in the modern workplace. Link in comments.",
  "Grateful for the opportunity to speak at the Tech Summit this year. Key takeaways:",
  "We're hiring! Join us in building the future of {industry}.",
  "Celebrating a major milestone with the team today! 🎉",
  "Learned so much from today's conference. Here are my top insights...",
  "Proud to announce our company has been recognized as a Best Place to Work!",
  "The importance of work-life balance cannot be overstated...",
  "Just completed my certification in {skill}! Always learning.",
  "Shoutout to my incredible team for their dedication and hard work.",
  "Innovation happens when we embrace failure. Here's what I learned...",
  "Looking forward to 2024! Here are my professional goals for the year.",
  "Diversity in tech isn't just important—it's essential. Here's why...",
  "Mentorship has changed my career. Always happy to pay it forward.",
  "The job market is evolving. Here's what candidates should know...",
  "Remote work tips from someone who's been doing it for 5 years:",
  "Proud of my team for delivering under pressure. Leadership means...",
  "Just had the best onboarding experience at {company}! Excited for this journey."
];

const industries = [
  "technology", "finance", "healthcare", "e-commerce", "education",
  "marketing", "consulting", "entertainment", "AI and machine learning"
];

const skills = [
  "Project Management", "Data Analysis", "Cloud Computing", "Agile Methodologies",
  "Machine Learning", "Leadership", "Product Strategy", "Digital Marketing"
];

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function generateRandomDate(daysAgo: number): Date {
  const now = new Date();
  const randomDays = Math.floor(Math.random() * daysAgo);
  const randomHours = Math.floor(Math.random() * 24);
  const randomMinutes = Math.floor(Math.random() * 60);
  
  return new Date(
    now.getTime() - 
    (randomDays * 24 * 60 * 60 * 1000) - 
    (randomHours * 60 * 60 * 1000) - 
    (randomMinutes * 60 * 1000)
  );
}

export function generateFakeUsers(count: number = 30): User[] {
  const users: User[] = [];
  
  // First user is the current user (Justin Linville)
  users.push({
    id: 1,
    name: "Justin Linville",
    headline: "Software QA Professional",
    avatar: `https://i.pravatar.cc/150?img=1`,
    connections: Math.floor(Math.random() * 2000) + 100,
    company: undefined
  });
  
  for (let i = 2; i <= count; i++) {
    const firstName = getRandomElement(firstNames);
    const lastName = getRandomElement(lastNames);
    
    users.push({
      id: i,
      name: `${firstName} ${lastName}`,
      headline: `${getRandomElement(jobTitles)} at ${getRandomElement(companies)}`,
      avatar: `https://i.pravatar.cc/150?img=${i}`,
      connections: Math.floor(Math.random() * 2000) + 100,
      company: getRandomElement(companies)
    });
  }
  
  return users;
}

export function generateFakePosts(users: User[], count: number = 30): Post[] {
  const posts: Post[] = [];
  
  for (let i = 1; i <= count; i++) {
    const user = getRandomElement(users);
    const template = getRandomElement(postTemplates);
    const content = template
      .replace("{title}", getRandomElement(jobTitles))
      .replace("{company}", user.company || getRandomElement(companies))
      .replace("{industry}", getRandomElement(industries))
      .replace("{skill}", getRandomElement(skills));
    
    const hasImage = Math.random() > 0.7; // 30% chance of having an image
    
    posts.push({
      id: i,
      userId: user.id,
      content: content,
      timestamp: generateRandomDate(30),
      likes: Math.floor(Math.random() * 500),
      comments: [],
      reposts: Math.floor(Math.random() * 100),
      image: hasImage ? `https://picsum.photos/600/400?random=${i}` : undefined,
      isLiked: false
    });
  }
  
  // Sort by timestamp, newest first
  return posts.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
}

export const fakeUsers = generateFakeUsers(30);
export const fakePosts = generateFakePosts(fakeUsers, 30);
