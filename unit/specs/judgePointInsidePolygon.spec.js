import utils from '../../src/hdmap/utils.js';

describe('点位越界', () => {
  it('测试点在多边形的边上', () => {
    expect('on').to.equal(
      utils.judgePointInsidePolygon(
        [50, 90],
        [
          [-180.5, 94],
          [-190.5, 33],
          [-151, 39],
          [-151.5, 99],
          [158.5, 112],
          [50, 90],
          [-100, -80]
        ]
      )
    );
  });
  it('测试点在多边形的边上', () => {
    expect('on').to.equal(
      utils.judgePointInsidePolygon(
        [-100, -80],
        [
          [-180.5, 94],
          [-190.5, 33],
          [-151, 39],
          [-151.5, 99],
          [158.5, 112],
          [50, 90],
          [-100, -80]
        ]
      )
    );
  });
  it('测试点在多边形的内部', () => {
    expect('in').to.equal(
      utils.judgePointInsidePolygon(
        [50, 95],
        [
          [-180.5, 94],
          [-190.5, 33],
          [-151, 39],
          [-151.5, 99],
          [158.5, 112],
          [50, 90],
          [-100, -80]
        ]
      )
    );
  });
  it('测试点在多边形的内部', () => {
    expect('in').to.equal(
      utils.judgePointInsidePolygon(
        [50, 97],
        [
          [-180.5, 96],
          [-190.5, 36],
          [-151, 42],
          [-151.5, 100],
          [158.5, 115],
          [50, 95],
          [-100, -83]
        ]
      )
    );
  });
  it('测试点在多边形的外部', () => {
    expect('out').to.equal(
      utils.judgePointInsidePolygon(
        [150, 195],
        [
          [-180.5, 94],
          [-190.5, 33],
          [-151, 39],
          [-151.5, 99],
          [158.5, 112],
          [50, 90],
          [-100, -80]
        ]
      )
    );
  });
  it('测试点在多边形的外部', () => {
    expect('out').to.equal(
      utils.judgePointInsidePolygon(
        [150, 196],
        [
          [-180.5, 96],
          [-190.5, 35],
          [-151, 40],
          [-151.5, 100],
          [158.5, 115],
          [50, 92],
          [-100, -81]
        ]
      )
    );
  });
});
