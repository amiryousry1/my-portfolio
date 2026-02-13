import CaseStudyContent from '@/components/CaseStudyContent';

// Mock Data (In a real app, fetch based on ID)
const projects = {
    1: {
        title: 'SaaS Dashboard AI',
        role: 'Product Designer & Frontend Developer',
        duration: '4 Weeks',
        tools: ['Figma', 'Next.js', 'OpenAI API'],
        overview: 'لوحة تحكم ذكية للشركات بتستخدم الذكاء الاصطناعي لتحليل البيانات وتوقع النتائج. الهدف كان تبسيط البيانات المعقدة لصناع القرار.',
        problem: 'العملاء كانوا بيضيعوا وقت كبير في تحليل تقارير الـ Excel المعقدة، ومكانوش بيقدروا ياخدوا قرارات سريعة.',
        solution: 'بنينا داش بورد مركزية بتجمع البيانات، وبتستخدم AI Agent عشان يحللها ويطلع "Insights" جاهزة باللغة الطبيعية.',
        process: [
            { title: 'Discovery', desc: 'قابلينا 5 مديرين ماليين وفهمنا المشاكل الحقيقية.' },
            { title: 'Vibe Design', desc: 'صممنا واجهة هادية (Dark Mode) عشان تقلل تشتت العين.' },
            { title: 'AI Integration', desc: 'ربطنا GPT-4 عشان يكتب ملخص يومي للأداء.' }
        ],
        results: [
            'وفرنا 15 ساعة شغل أسبوعياً لكل مدير.',
            'زيادة 40% في سرعة اتخاذ القرار.',
            'Client moved from MVP to Full Scale.'
        ]
    },
    // Fallback for other IDs
    default: {
        title: 'Project Details',
        role: 'Product Designer',
        duration: 'N/A',
        tools: ['Figma', 'React'],
        overview: 'تفاصيل المشروع ده لسه بتتكتب. بس تأكد إنه كان تجربة مميزة! 😉',
        problem: 'جاري إضافة التفاصيل...',
        solution: 'جاري إضافة التفاصيل...',
        process: [],
        results: []
    }
};

export function generateStaticParams() {
    return Object.keys(projects).filter(id => id !== 'default').map((id) => ({
        id: id,
    }));
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
    // @ts-ignore
    const project = projects[params.id] || projects.default;

    return <CaseStudyContent project={project} />;
}
