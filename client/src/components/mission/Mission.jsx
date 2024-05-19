
import React from 'react';
import Image from "next/image"

export function Mission() {
  return (
<div class="max-w-screen-xl mx-auto ">
    <div class="text-center mb-10">
        <h2 class="text-4xl tracking-tight font-bold text-primary-800">Highlighted Features</h2>
    </div>

    <div class="flex flex-col md:flex-row">
        <div class="mr-0 md:mr-8 mb-6 md:mb-0">
            <Image class="w-1/2 md:w-full mx-auto"
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHes7Zc89dSGF85H0CtEWUTH6pgzGFVUmgK2YN9KvzlQ&s" 
             alt="can_help_banner"
             width={100}
             height={100}
             />
        </div>
    
        <div class="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div class="w-full sm:w-1/2 mb-4 px-2 ">
                <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 class="text-2xl font-bold text-md mb-6">Mission</h3>
                    <p class="text-sm"><span className="font-bold">M1</span> :To develop 'educational pathways' so that students can take their career towards success.
                    <br></br><span className="font-bold">M2</span> :To imbibe curiosity and support innovativeness by providing guidance to use the technology effectively.
                    <br></br><span className="font-bold">M3</span> :To inculcate management skills, integrity and honesty through curricular, co-curricular and extra-curricular activities.</p>
                </div>
            </div>
            <div class="w-full sm:w-1/2 mb-4 px-2 ">
                <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 class="text-2xl font-bold text-md mb-6">Vision</h3>
                    <p class="text-sm"> To build a culture of innovation and  research in students and make them capable to solve upcoming challenges of human life using computing.</p>
                </div>
            </div>
            <div class="w-full sm:w-1/2 mb-4 px-2 ">
                <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 class="text-2xl font-bold text-md mb-6">PROGRAM EDUCATIONAL OBJECTIVES</h3>
                    <p class="text-sm"><span className="font-bold">PE01.</span>  Graduates of IT program are prepared to be employed in IT industries and be engaged in learning, understanding, and applying new ideas.
                    <br></br><span className="font-bold">PE02.</span>  The graduates are prepared to perform effectively as individuals and team members in the workplace,growing into highly technical or project management and leadership roles.</p>
                </div>
            </div>
            <div class="w-full sm:w-1/2 mb-4 px-2 ">
                <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 class="text-2xl font-bold text-md mb-6">Program Specific Outcome</h3>
                    <p class="text-sm"><span className="font-bold">PSO1</span>  Ability to understandthe principles and working of hardware and software aspects in information technology.
                    <br></br><span className="font-bold">PSO2</span>  Ability to explore and develop innovative ideas to solve real world problem using IT skills.</p>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Mission;



