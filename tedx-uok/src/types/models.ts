export interface Speaker {
  id: string;
  slug: string;
  full_name: string;
  title: string;
  topic: string;
  bio_short: string;
  bio_long: string;
  photo_url: string;
  talk_title: string;
  talk_description: string;
  expertise: string[];
  social_links: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}
