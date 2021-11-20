import Vector2d from "./Vector2d";
import Rectangle from "./Rectangle";

/**
 * get the distance of two points
 * @param vec1 first point
 * @param vec2 second point
 * @returns distance
 */
export const distanceBetweenPoints = (vec1: Vector2d, vec2: Vector2d) => {
    return Math.sqrt(Math.pow(vec2.x - vec1.x, 2) + Math.pow(vec2.y - vec1.y, 2));
};

/**
 * get the bound generated by a points array.
 */
export const getBoundOfPoints = (...points: Vector2d[]) => {
    if (points.length < 1) {
        throw new Error("getBoundOfPoints(): the length of points less then 1");
    }

    let minx = points[0].x;
    let miny = points[0].y;
    let maxx = points[0].x;
    let maxy = points[0].y;
    for (let i = 1; i < points.length; i++) {
        minx = Math.min(minx, points[i].x);
        miny = Math.min(miny, points[i].y);
        maxx = Math.max(maxx, points[i].x);
        maxy = Math.max(maxy, points[i].y);
    }

    return new Rectangle(
        new Vector2d(minx, miny),
        new Vector2d(maxx, maxy)
    );
};
