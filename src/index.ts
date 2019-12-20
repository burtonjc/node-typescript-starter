const main = async () => {
  console.log('Hello World!');
};

main()
  .then(() => {
    console.log('Finished!');
  })
  .catch(e => {
    console.error('Done been broke:', e);
  });
