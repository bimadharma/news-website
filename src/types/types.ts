
export interface NewsItem {
  id: number;
  title: string;
  slug: string;
  author: string;
  created_at: string; 
  category: string;   
  img_path: string | null; 
  image_url: string | null;
}

// Tipe untuk Pilar Program (JSON statis)
export interface PillarItem {
  id: number;
  title: string;
  description: string;
  icon: string; 
}

// Tipe untuk data navigasi
export interface NavItem {
  name: string;
  path: string;
}

export interface NewsDetail {
	title?: string;
	author?: string;
	category?: string;
	created_at?: string;
	image_url?: string | null;
	content?: string;
	description?: string;
	body?: string;
	article?: string;
	slug?: string;
};