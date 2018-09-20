// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    
    var money = {};
    var H = 0; // 50
    var Q = 0  // 25
    var D = 0; // 10
    var N = 0; // 5
    var P = 0; // 1
    var temp = 0;
    var res = 0;

    if(currency <= 0){
        return money;
    }

    if(currency > 10000){
        money.error = "You are rich, my friend! We don't have so much coins for exchange";
        return money;
    }

    // main calculation

    //50

    H = Math.floor(currency / 50);
    res = currency % 50;

    if(res === 0){
        money.H = H;
        return money;
    }

    //25

    Q = Math.floor(res / 25);
    res = res % 25;

    if(res === 0){
        if(H !== 0){
            money.H = H;
        }
        money.Q = Q;
        return money;
    }

    //10

    D = Math.floor(res / 10);
    res = res % 10;

    if(res === 0){
        if(H !== 0){
            money.H = H;
        }
        if(Q !== 0){
            money.Q = Q;
        }

        money.D = D;
        return money;
    }

    //5

    N = Math.floor(res / 5);
    res = res % 5;

    if(res === 0){
        if(H !== 0){
            money.H = H;
        }
        if(Q !== 0){
            money.Q = Q;
        }
        if(D !== 0){
            money.D = D;
        }

        money.N = N;
        return money;
    }

    //1

    P = Math.floor(res / 1);
    res = res % 1;

    if(res === 0){
        if(H !== 0){
            money.H = H;
        }
        if(Q !== 0){
            money.Q = Q;
        }
        if(D !== 0){
            money.D = D;
        }
        if(N !== 0){
            money.N = N;
        }

        money.P = P;
        return money;
    }
}
