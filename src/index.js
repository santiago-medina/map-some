const mapSome = (arr, transform) =>
    arr.reduce((acc, item) => {
      const mapped = transform(item);
      if (mapped !== null && mapped !== undefined) {
        acc.push(mapped);
      }
      return acc;
    }, []);
  
  module.exports = { mapSome };
  