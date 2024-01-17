export const enum Weather {
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Stormy = 'stormy',
    Windy = 'windy',
}
  
export const enum Visibility {
    Great = 'great',
    Good = 'good',
    Ok = 'ok',
    Poor = 'poor',
}
  
export  type DiaryEntry = {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment: string;
}