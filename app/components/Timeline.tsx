const Timeline = () => {
    const data = [
        {
            id: 1,
            school: "Sarasas Witaed Minburi School",
            period: "Pre-Kindergarden - 4th Grade",
            date: "2009 - 2016"
        },
        {
            id: 2,
            school: "Sarasas Witaed Romklao International Programme",
            period: "4th Grade - 6th Grade",
            date: "2016 - 2019"
        },
        {
            id: 3,
            school: "Homeschooling with Wolsey Hall Oxford, England",
            period: "7th Grade - 9th Grade",
            date: "2019 - 2022"
        },
        {
            id: 4,
            school: "Rugby School Thailand",
            period: "9th Grade - Present (10th Grade)",
            date: "Present"
        }
    ]

    return (
        <div className="grid">
            <div>
                {data.map(({ id, school, period, date }) => (
                    <div key={id} className="relative pl-8 sm:pl-32 py-6 group">
                        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">{date}</time>
                            <div className="text-xl font-bold text-slate-900 dark:text-white">{school}</div>
                        </div>
                        <p className="text-sm "></p>
                        <div className="text-slate-500 dark:text-slate-100">{period}</div>
                    </div>
                ))} 
            </div>
        </div>
    );
}

export default Timeline; 