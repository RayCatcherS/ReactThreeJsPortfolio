import React from 'react';
import { ProjectItem } from '../../../types/interfaces';
import SubSubSectionIntroduction from './SubsubSections/SubSubSectionIntroduction';
import SubSubSectionDescription from './SubsubSections/SubSubSectionDescription';

const SubSection: React.FC<{ projectItem: ProjectItem }> = ({ projectItem }) => {
    return (
        <div>
            <SubSubSectionIntroduction projectItem={projectItem} />

            <SubSubSectionDescription projectItem={projectItem} />
            
        </div>

    );
};

export default SubSection;
