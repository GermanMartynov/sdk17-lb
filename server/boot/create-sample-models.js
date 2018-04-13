module.exports = function(app) {
  app.dataSources.db.automigrate('SudokuPuzzle', function(err) {
    if (err) throw err;

    app.models.SudokuPuzzle.create([{
      given: '000000001000001002034000000000005000006000370800012000000390400000400000020000000',
      solution: '782563941695841732134279586947635218216984375853712694561398427378426159429157863'
    }, {
      given: '000000001000002000003000045000000600000150000370000200000003000000600708025000000',
      solution: '756394821419582376283761945548239617962157483371846259897413562134625798625978134'
    }, {
      given: '000000000000001023004560000000000000000023060017400000000108700000700000200000000',
      solution: '781234695596871423324569871932617548845923167617485239463198752159742386278356914'
    }], function(err, coffeeShops) {
      if (err) throw err;

      console.log('Models created: \n', coffeeShops);
    });
  });
};
