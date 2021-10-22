export enum visualizationType {
    public,
    subscribed_only,
    guests_only
} 

export class Event {
    name: string;
    startDate: Date;
    endDate: Date;
    sinopsis: string;
    visualization: 'public' | 'subscribed_only' | 'guests_only';
    slug: string;
    isFeatured: boolean;
}
