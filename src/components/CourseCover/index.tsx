import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
const names:Record<string,string>={ai:'Generative AI learning workflow',cyber:'Cybersecurity risk and response workflow','it-support':'IT support diagnosis workflow','microsoft-productivity':'Microsoft 365 and Excel workflow',cloud:'Cloud computing solution workflow'};
export default function CourseCover({course}:{course:string}){
 const src=useBaseUrl('/img/learning-studio/'+course+'.svg');
 return <img className="studioCourseCover" src={src} alt={names[course]||'Illustrated course workflow'} loading="lazy" width="800" height="480" />;
}
