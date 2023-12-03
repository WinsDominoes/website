"use client"
import ProgressBar from "@ramonak/react-progress-bar";

const SkillProgress = ({text, progress}: any) => {
    
    // let css = "h-full animate-pulse rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500"
    // let bar = <div className={css} style={{width: progress + "%"}}></div>

    return (
        <div>
            <h1 className="text-xl font-bold">{ text }</h1>
            <div className="relative mb-5 h-2">
                <ProgressBar 
                    completed={progress} 
                    animateOnRender
                    isLabelVisible={false}
                    height="0.5rem"
                    bgColor="linear-gradient(to right, #06b6d4, #6366f1)"
                />
            </div>
        </div>
    )
}

export default SkillProgress;