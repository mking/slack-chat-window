(function () {
  function generateIndex(list, keyGetter) {
    return list.toKeyedSeq()
      .mapEntries(function (entry) {
        return [keyGetter(entry[1]), entry[1]];
      })
      .toMap();
  }

  window.generateIndex = generateIndex;
})();
