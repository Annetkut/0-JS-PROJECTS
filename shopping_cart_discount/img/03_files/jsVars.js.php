
var jsVars = {"base_url":"https:\/\/www.reserved.com\/de\/de\/","secure_base_url":"https:\/\/www.reserved.com\/de\/de\/","unsecure_base_url":"https:\/\/www.reserved.com\/de\/de\/","storelocator_min_query_size":3,"parcelshop_min_query_size":3,"errors":[],"current_currency":"EUR"};

locache.session.set("base_url", jsVars.base_url);
var sessionCache = locache.session;

jsVars.mediaURL = "https://static.reserved.com/media/catalog/product";

jsVars.errors.stock_max = "Product maximum qty";
jsVars.product_added = "Product was added to your shopping cart.";
jsVars.select_shop = "Please select the store.";
jsVars.couponValid = "Coupon is valid";
jsVars.provide_cvv_code = "Please provide CVV code of your card";
jsVars.credit_card_date = "Credit card has expired";
jsVars.credit_card_number = "Credit card number is invalid";
jsVars.credit_card_error = "Credit card is invalid";
jsVars.countryCode = "PL";
jsVars.answer_yes = "Yes";
jsVars.answer_no = "No";
jsVars.see_on_map = "Show on map";
jsVars.are_you_sure = "You can pay only once. Unpaid products should be returned.<br>Are you sure of your choice?";
jsVars.return_rma_title = "Are You sure You want to sent return form?";
jsVars.return_rma_msg = 'Choosing YES is synonymous with the signing of the return form';
jsVars.order_pay = 'Place order';
jsVars.order = 'Place order without paying';
jsVars.return_deferred = 'Deferred payment item return';
jsVars.preventScrollEvent = false;

jsVars.addToWishlistUrl = "https://www.reserved.com/pl/pl/ajx/wishlist/add/";
jsVars.removeFromWishlistUrl = "https://www.reserved.com/pl/pl/ajx/wishlist/remove/";
jsVars.moveFromWishlistToCartUrl = "https://www.reserved.com/pl/pl/ajx/wishlist/move/";
jsVars.checkStoresAvailabilityUrl = "https://www.reserved.com/pl/pl/ajx/stores/check/";
jsVars.notifyAvailabilityUrl = "https://www.reserved.com/pl/pl/ajx/comingsoon/save/";
jsVars.addToCartUrl = "https://www.reserved.com/pl/pl/ajx/cart/add/";
jsVars.getQuickShopDataUrl = "https://www.reserved.com/pl/pl/ajx/quickShop/get/" // + productID

jsVars.catalogSearchPageUrl = "https://www.reserved.com/pl/pl/catalogsearch/result/";
jsVars.loginPageUrl = "https://www.reserved.com/pl/pl/customer/account/login/";
jsVars.customerAccountPageUrl = "https://www.reserved.com/pl/pl/customer/account/edit/";
jsVars.salesOrderHistoryPageUrl = "https://www.reserved.com/pl/pl/sales/order/history/";
jsVars.wishlistPageUrl = "https://www.reserved.com/pl/pl/wishlist/";
jsVars.storeSwitcherPageUrl = "https://www.reserved.com/pl/pl/language/";
jsVars.checkoutCartPageUrl = "https://www.reserved.com/pl/pl/checkout/cart/";

jsVars.productPage_sizeUnavailable_tooltip = "Size is unavailable online. Check it to get notification about availability.";
jsVars.sizeSelector_title =  "Choose size";
jsVars.addToCartButton_label = "Add to cart";
jsVars.comingSoonButton_label = "Notify when available";
jsVars.isCommercial = !!+("1");

jsVars.checkPostCodeHandlingUrl = "https://www.reserved.com/pl/pl/shippingmethod/method/getoutOfService/";
jsVars.blockOutOfServiceEnabled = '0' === '1';

