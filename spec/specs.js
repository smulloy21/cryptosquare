describe('codeMessage', function(){
  it('should make and translate a message into a perfect square', function(){
    expect(codeMessage("love")).to.equal("lvoe");
  });

  it('should make and translate a message into the nearest square', function(){
    expect(codeMessage("epicodus")).to.equal("ecupo sid");
  });

  it('should encode longer messages', function(){
    expect(codeMessage("epicodus is awesome")).to.equal("edamp uweis eciso so");
  });

  it('should encode super long messages', function(){
    expect(codeMessage("In art, the obvious is a sin.")).to.equal("itvin nhisa eoaro ustbs i");
  });
});

describe('decodeMessage', function(){
  it('should make and translate a message into a perfect square', function(){
    expect(decodeMessage("lvoe")).to.equal("love");
  });

  it('should make and translate a perfect square', function(){
    expect(decodeMessage("ivule coly")).to.equal("ilovelucy");
  });

  it('should make and translate a message into the nearest square', function(){
    expect(codeMessage("ecupo sid")).to.equal("epicodus");
  });

  it('should make and translate a message into the nearest square', function(){
    expect(decodeMessage("edamp uweis eciso so")).to.equal("epicodusisawesome");
  });

  // it('should encode super long messages', function(){
  //   expect(decodeMessage("itvin nhisa eoaro ustbs i")).to.equal("inarttheobviousisasin");
  // });
});
