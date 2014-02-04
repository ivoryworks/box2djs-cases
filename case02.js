// エンジンを初期化
var worldAABB = new b2AABB();			// AABB: Axis-Aligned Bounding Box（軸に平行な境界矩形）
worldAABB.minVertex.Set(-1000, -1000);	// X座標とY座標の最少
worldAABB.maxVertex.Set(1000, 1000);	// X座標とY座標の最大
var gravity = new b2Vec2(0, 300);		// 重力ベクトル: ベクトルの始点を原点に取った場合の終点のX 座標とY 座標
var doSleep = true;						// true: 一度動きが止まった物体については衝突発生まで止まり続ける(計算しない)
var world = new b2World(worldAABB, gravity, doSleep);

// 図形を定義してエンジンに追加
var boxSd = new b2BoxDef();	// 図形(shape)
boxSd.density = 1.0;		// 密度
boxSd.extents.Set(10, 10);	// 矩形の大きさ

var bd = new b2BodyDef();	// 物体(body)
bd.AddShape(boxSd);			// 物体に対して図形を割り当てる
bd.position.Set(250, 100);	// 位置
world.CreateBody(bd);


boxSd.density = 1.0 / 1000;		// 密度を1/100にする
bd.AddShape(boxSd);
bd.position.Set(100, 100);
world.CreateBody(bd);


boxSd.density = 1.0 * 1000;		// 密度を100倍にする
bd.AddShape(boxSd);
bd.position.Set(400, 100);
world.CreateBody(bd);


// 地面用に固定された四角をエンジンに追加
var groundSd = new b2BoxDef();
groundSd.extents.Set(2000, 50);
groundSd.restitution = 0.2;		// はねかえり係数
var groundBd = new b2BodyDef();
groundBd.AddShape(groundSd);
groundBd.position.Set(-500, 500);
var ground = world.CreateBody(groundBd);
