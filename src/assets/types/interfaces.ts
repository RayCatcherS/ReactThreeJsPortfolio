export interface ProjectGroup {
    projectGroupName: string;
    projectGroupDescription: string;
    projectItemsData: ProjectItem[];
}
  
export interface ProjectItem {
    itemType: string;
    mediaPreviewUrl: string;
    mediaItemSource: string;
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
  
export interface Company {
    companyName: string;
    companyUrl: string;
}

export interface CallToAction {
    callToActionText: string;
    callToActionUrl: string;
}

export interface HomeSectionProps {
  portfolioOwner: string;
  role: string;
  homeCover: HomeCover;
}

export interface HomeCover {
  coverImageUrl: string;
  personalEmail: string;
  linkedinURL: string;
  coverDescription1: string;
  coverDescription2: string;
}

export interface ContactMeProps {
    contactMeTitle: string;
    contactMeDescription: string;
    contactMeCoverImage: string;
    personalEmail: string;
    linkedinURL: string;
}

export interface AboutMeProps {
  pictureProfile: string;
  title: string;
  aboutMeDescription: string;
}

export enum ItemType {
  YoutubeUrl = "ItemType.YoutubeUrl",
  UrlVideo = "ItemType.UrlVideo",
  UrlImage = "ItemType.UrlImage",
}

export enum BackgroundType {
  Image = "image",
  Video = "video"
}

export interface NavbarProps {
  activeSection: string;
}
