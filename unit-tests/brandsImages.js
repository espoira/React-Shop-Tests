const arr = ['01','02','03','04','05','06','07','08','09','10'];

const brandsImages = arr.map((item) => {

    return (<img key={item} src = {`/images/brand-${item}.png`} />);

});