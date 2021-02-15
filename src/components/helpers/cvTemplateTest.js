export default function testFullCV(){
    return {
        name: 'Aron Smith',
        bio:
            "Marketing and business development professional with three years of skilled experience focusing on office organisation, marketing management, cost analysis, online marketing, customer relationship management, and planning and execution of the marketing strategy. Additional experience has been gained in the areas of staff responsibility, hiring, leadership, and project management.",
        location: 'New York',
        email: ' info@domain.com',
        phone: '07624123456',
        linkedin: 'https://www.linkedin.com/in/aron-smith/',
        github: 'https://github.com/aron-smith',
        experience: [
            {
                id: 0,
                position: 'Head of marketing',
                company: 'Online marketing Company',
                startDate: '2015-01-05',
                endDate: '',
                jobDescription:
                    'Responsibilities include building the marketing organisation and managing the brand image and marketing for seven countries. Additional duties: negotiation and procurement of radio advertising, project management of the new front-end platform, cost analysis.',
            },
            {
                id: 1,
                position: 'Country manager',
                company: 'Webstation',
                startDate: '2013-01-12',
                endDate: '2015-10-13',
                jobDescription: 'Tasked with the reorganisation and restructuring of the head office; this included increasing productivity, budgeting, contract negotiation as well as staff management and recruitment.',
            },
            {
                id: 2,
                position: 'Marketing manager',
                company: 'The standard',
                startDate: '2011-01-12',
                endDate: '2013-10-13',
                jobDescription: 'Marketing manager for the UK markets. Major projects included drafting of the marketing plan, which was heavily focused on ROI, as well as strategising to achieve expansion on a limited budget.',
            },
        ],
        education: [
            {
                id: 0,
                school: 'Mount Saint Vincent University',
                degree: 'Master in business',
                startDate: '2007-11-11',
                endDate: '2010-10-22',
            },
            {
                id: 1,
                school: 'High School X',
                degree: 'Sciences',
                startDate: '2002-09-09',
                endDate: '2008-09-22',
            },
        ],
        skills: [
            {
                skillName: 'Marketing',
                id: 0,
            },
            {
                skillName: 'Communication',
                id: 1,
            },
            {
                skillName: 'Project management',
                id: 2,
            },
            {
                skillName: 'ReactJS',
                id: 3,
            },
            {
                skillName: 'English',
                id: 5,
            },
            {
                skillName: 'Javascript',
                id: 7,
            },
            {
                skillName: 'Java',
                id: 8,
            },
        ],
        submitStatus: true,
        edCount: 3,
        expCount: 2,
    }
};