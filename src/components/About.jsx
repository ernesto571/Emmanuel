
export default function About () {

    return (
        <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16" >
            <div className="grid gap-10 rounded-3xl bg-tint p-8 shadow-sm md:grid-cols-3 md:p-12" >
                <div><span className="inline-block rounded-full border border-acc px-4 py-1 text-xs font-semibold text-acc">Philosophy</span><h2 className="mt-3 text-3xl font-extrabold tracking-tight">Build From First Principles</h2></div>

                <div className="grid gap-4 sm:grid-cols-2 md:col-span-2">
                    <div className="rounded-2xl bg-bg p-5 shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="target" className="lucide lucide-target h-5 w-5 text-acc"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg><h3 className="mt-3 font-bold">Start With the Problem</h3><p className="mt-1 text-sm text-mute">Strip a feature down to the user need before choosing a single tool.</p></div>

                    <div className="rounded-2xl bg-bg p-5 shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="zap" className="lucide lucide-zap h-5 w-5 text-acc"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg><h3 className="mt-3 font-bold">Performance Is a Feature</h3><p className="mt-1 text-sm text-mute">Fast load times and smooth interactions are part of the design.</p></div>

                    <div className="rounded-2xl bg-bg p-5 shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="layers" className="lucide lucide-layers h-5 w-5 text-acc"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg><h3 className="mt-3 font-bold">Keep It Simple</h3><p className="mt-1 text-sm text-mute">Small, readable code beats clever abstractions every time.</p></div>

                    <div className="rounded-2xl bg-bg p-5 shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="users" className="lucide lucide-users h-5 w-5 text-acc"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg><h3 className="mt-3 font-bold">Ship and Iterate</h3><p className="mt-1 text-sm text-mute">Release early, measure, and improve with real feedback.</p></div>
                </div>

            </div>

           
        </section>
    )
}