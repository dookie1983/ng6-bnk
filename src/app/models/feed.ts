export class Item {
    id: string;
    username: string;
    item_id: string;
    service: string;
    title: string;
    url: string;
    thumbnail: string;
    created_time: string;
    data: string;
    status: string;
    created: string;
    changed: string;
}

export class Feed {
    current_page: string;
    feeds: Item[];
    total_page: string;
}