import React from 'react';
import Content from '@theme-original/DocItem/Content';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import VisualLearningStudio from '@site/src/components/VisualLearningStudio';
import PageWorkbook from '@site/src/components/PageWorkbook';

export default function DocItemContentWrapper(props:React.ComponentProps<typeof Content>){
  const {metadata}=useDoc();
  const id=metadata.id;
  const isBeginner=/^beginner\/(ai|cyber|it-support|microsoft-productivity|cloud)(\/|$)/.test(id);
  const isCompletion=id.endsWith('/assessment/completion');
  return <>
    {isBeginner&&!isCompletion&&<nav className="learningPageJumps" aria-label="Learning page shortcuts"><a href="#learning-studio">Interactive practice</a><a href="#page-workbook">My page workbook</a></nav>}
    <Content {...props}/>
    {isBeginner&&!isCompletion&&<><VisualLearningStudio key={'studio-'+id} docId={id}/><PageWorkbook key={'workbook-'+id} docId={id}/></>}
  </>;
}
