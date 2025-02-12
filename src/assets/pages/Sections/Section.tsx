import React from 'react'


interface ProjectGroup {
  projectGroupName: string;
  projectGroupDescription: string;
  projectItemsData: ProjectItem[];
}

interface ProjectItem {
  itemType: string;
  mediaPreviewUrl: string;
  imagePlayableReferenceUrl: string;
  title: string;
  description: string;
  gameAssetImageUrl: string;
  company: Company;
  professionalRoles: string;
  platforms: string;
  callToActions: CallToAction[];
  itemCoverBackgroundType: string;
  backgroundCoverImageUrl: string;
  backgroundCoverVideoUrl: string;
}

interface Company {
  companyName: string;
  companyUrl: string;
}

interface CallToAction {
  callToActionText: string;
  callToActionUrl: string;
}

const Section: React.FC<ProjectGroup> = ({ projectGroupName, projectGroupDescription, projectItemsData }) => {
/**
 * { projectGroup }
 * ogni section riceve un projectGroup(json) da visualizzare all'interno
 */
  return (
    <div>
          {projectGroupName}
      
    </div>
  )
}

export default Section
