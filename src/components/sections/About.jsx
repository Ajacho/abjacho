import { CheckCheck } from "lucide-react";

export const About = () => {

    const techSkills = [
        "ASP.NET Core MVC",
        "React.js",
        "C#",
        "JavaScript",
        "WordPress",
        "Azure"
    ];


    return (  
        <section id="about" className="min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-[##F6ECE3] italic">About Me</h1>
                <div className="border-t border-[#F6ECE3] transition-all duration-300 my-10"></div>
                <div className="grid grip-cols-1 md:grid-cols-2 gap-6">
                    <div className="about-image">
                        {/* Picture of me */}
                        <img src="./me.JPEG" alt="Andrea Jacho" className="rounded-full" />
                    </div>
                    <div>
                        <p className="text-[##F6ECE3] mt-4">
                            I’m a senior Computer Science student at <a className="text-yellow-400 font-bold" href="https://wou.edu/" target="_blank" rel="noopener noreferrer">Western Oregon University </a>
                            with a passion for building real-world applications and continuously growing my technical skill set.
                            <br /><br />
                            {String.fromCodePoint('0x1f4bb')} Technologies I have been working with:
                        </p>                        
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            {techSkills.map((skill) => (
                                <li key={skill} className="list-none">
                                    <CheckCheck className="text-yellow-400 inline-block mr-2" />{skill}
                                </li>
                            ))}
                        </div>
                        <br />
                    </div>
                </div>    
                <p className="text-text-[##F6ECE3] mt-4">                   
                    Beyond coding, I stay engaged by following tech influencers, reading cognitive science books, 
                    and capturing Oregon’s landscapes through photography and sharing them on<a className="text-yellow-400 font-bold" href="https://www.pinterest.com/abjacho" target="_blank" rel="noopener noreferrer"> Pinterest</a>.
                    When I’m not immersed in tech, you’ll likely find me at the gym. 
                </p>
            </div>
        </section>
    );
}
 
export default About;