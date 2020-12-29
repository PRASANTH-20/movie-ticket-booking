(this["webpackJsonpmovie-ticket-booking-ui"]=this["webpackJsonpmovie-ticket-booking-ui"]||[]).push([[0],{40:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(1),r=c.n(a),s=c(20),i=c.n(s),o=(c(40),c(29)),l=c(30),u=c(34),d=c(32),E=c(18),j=c(7),S=c(4),b=c(15),O=(c(45),c(46),function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("header",{children:"Movie Ticket Booking"}),Object(n.jsx)("div",{className:"subHeading",children:"The best of entertainment for you"})]})}),I=(c(47),function(e){var t=e.title,c=e.poster,a=e.actors,r=e.onMovieClick,s={backgroundImage:"url(".concat(c,")")};return Object(n.jsxs)("div",{className:"tileContainer",onClick:r,children:[Object(n.jsx)("div",{className:"tileContent",style:s}),Object(n.jsx)("div",{children:t}),Object(n.jsx)("div",{className:"actorsText",children:a})]})}),p={FETCH_MOVIES:"FETCH_MOVIES",FETCH_MOVIES_SUCCESS:"FETCH_MOVIES_SUCCESS",FETCH_MOVIES_FAILURE:"FETCH_MOVIES_FAILURE",SET_SELECTED_MOVIE:"SET_SELECTED_MOVIE"};var v={SET_SELECTED_MOVIE:"SET_SELECTED_MOVIE",SET_SELECTED_VENUE:"SET_SELECTED_VENUE",SET_SELECTED_SEATS:"SET_SELECTED_SEATS",FETCH_VENUES:"FETCH_VENUES",FETCH_VENUES_SUCCESS:"FETCH_VENUES_SUCCESS",FETCH_VENUES_FAILURE:"FETCH_VENUES_FAILURE",FETCH_AVAILABILITIES:"FETCH_AVAILABILITIES",FETCH_AVAILABILITIES_SUCCESS:"FETCH_AVAILABILITIES_SUCCESS",FETCH_AVAILABILITIES_FAILURE:"FETCH_AVAILABILITIES_FAILURE",MODIFY_AVAILABILITIES:"MODIFY_AVAILABILITIES",MODIFY_AVAILABILITIES_SUCCESS:"MODIFY_AVAILABILITIES_SUCCESS",MODIFY_AVAILABILITIES_FAILURE:"MODIFY_AVAILABILITIES_FAILURE"};var h=Object(j.e)(Object(b.b)((function(e){return{loading:e.homeReducer.loading,allMovies:e.homeReducer.allMovies,apiError:e.homeReducer.error}}),(function(e){return{fetchMovies:function(){return e({type:p.FETCH_MOVIES})},setSelectedMovie:function(t){return e(function(e){return{type:v.SET_SELECTED_MOVIE,payload:e}}(t))}}}))((function(e){var t=e.fetchMovies,c=e.allMovies,r=e.history,s=e.loading,i=e.apiError,o=e.setSelectedMovie;return Object(a.useEffect)((function(){t()}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)(O,{}),Object(n.jsx)("div",{className:"home-bodyTitle",children:"Which movie would you like to see today?"}),s?Object(n.jsx)("div",{className:"home-msg",children:"Loading..."}):i?Object(n.jsx)("div",{className:"home-msg",children:"An error occurred. Please try after some time."}):Object(n.jsx)("div",{className:"home-tilesParent",children:c.map((function(e){return Object(n.jsx)(I,Object(S.a)(Object(S.a)({},e),{},{onMovieClick:function(){return o(e),void r.push("/movie-ticket-booking-ui/details")}}),e._id)}))})]})}))),C=c(17);c(49);var _=Object(j.e)(Object(b.b)((function(e){return{loading:e.selectionReducer.loading,allMovies:e.selectionReducer.allMovies,apiError:e.selectionReducer.error,selectedMovie:e.selectionReducer.selectedMovie,selectedVenue:e.selectionReducer.selectedVenue,allVenues:e.selectionReducer.allVenues}}),(function(e){return{fetchVenues:function(){return e({type:v.FETCH_VENUES})},setSelectedVenue:function(t){return e(function(e){return{type:v.SET_SELECTED_VENUE,payload:e}}(t))}}}))((function(e){var t=e.selectedMovie,c=e.loading,r=e.apiError,s=e.fetchVenues,i=e.selectedVenue,o=e.allVenues,l=e.history,u=e.setSelectedVenue,d=Object(a.useState)(i),E=Object(C.a)(d,2),j=E[0],S=E[1];Object(a.useEffect)((function(){s()}),[]);var b={backgroundImage:"url(".concat(t.poster,")")},I=function(e){return{backgroundColor:e===j?"#2E3147":"white",color:e===j?"white":"black",border:e===j?"none":"1px solid #2E3147"}},p={backgroundColor:""===j?"lightgray":"#006600"};return Object(n.jsxs)("div",{children:[Object(n.jsx)(O,{}),c?Object(n.jsx)("div",{className:"home-msg",children:"Loading..."}):r?Object(n.jsx)("div",{className:"home-msg",children:"An error occurred. Please try after some time."}):Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"details-tileContainer",children:[Object(n.jsx)("div",{className:"details-tileContent",style:b}),Object(n.jsxs)("div",{className:"details-rightDiv",children:[Object(n.jsx)("div",{className:"details-title",children:t.title}),Object(n.jsx)("div",{className:"details-description",children:t.actors}),Object(n.jsx)("div",{className:"details-description",children:t.rated}),Object(n.jsx)("div",{className:"details-description",children:t.runtime}),Object(n.jsx)("div",{className:"details-description",children:t.plot})]})]}),Object(n.jsxs)("div",{className:"details-selectVenueContainer",children:[Object(n.jsx)("div",{className:"details-selectVenue",children:"Select a movie hall"}),Object(n.jsx)("div",{className:"details-venuesWrapper",children:o.map((function(e){return Object(n.jsx)("button",{style:I(e),onClick:function(){return function(e){S(e),u(e)}(e)},children:e},e)}))}),Object(n.jsx)("button",{style:p,onClick:function(){l.push("/movie-ticket-booking-ui/seats")},children:"Book Seats"})]})]})]})}))),m=(c(50),c(51),{empty:"white",selected:"#006600",reserved:"lightgray",locked:"lightgray"}),f=function(e){var t=Object(a.useState)(e.status),c=Object(C.a)(t,2),r=c[0],s=c[1],i={backgroundColor:m[r]};return Object(n.jsx)("div",{className:"seat",style:i,onClick:function(){e.onSeatClick(),"empty"===r?s("selected"):"selected"===r&&s("empty")}})};var A=Object(j.e)(Object(b.b)((function(e){return{allSeats:e.selectionReducer.allSeats,selectedSeats:e.selectionReducer.selectedSeats,loading:e.selectionReducer.loading,apiError:e.selectionReducer.error,totalCost:e.selectionReducer.totalCost,isBookingComplete:e.selectionReducer.isBookingComplete}}),(function(e){return{fetchAvailabilities:function(){return e({type:v.FETCH_AVAILABILITIES,payload:t});var t},setSelectedSeats:function(t){return e(function(e){return{type:v.SET_SELECTED_SEATS,payload:e}}(t))},lockSelectedSeats:function(){return e({type:v.MODIFY_AVAILABILITIES,payload:"locked"})},releaseSelectedSeats:function(){return e({type:v.MODIFY_AVAILABILITIES,payload:"empty"})},bookSelectedSeats:function(){return e({type:v.MODIFY_AVAILABILITIES,payload:"reserved"})}}}))((function(e){var t=e.allSeats,s=e.loading,i=e.apiError,o=e.fetchAvailabilities,l=e.setSelectedSeats,u=e.totalCost,d=e.bookSelectedSeats,E=e.lockSelectedSeats,j=e.releaseSelectedSeats,b=e.isBookingComplete,I=Object(a.useState)(!1),p=Object(C.a)(I,2),v=p[0],h=p[1],_=r.a.lazy((function(){return Promise.all([c.e(3),c.e(4)]).then(c.bind(null,69))}));Object(a.useEffect)((function(){o()}),[]);var m={backgroundColor:u>0?"#006600":"lightgray"};return Object(n.jsxs)("div",{children:[v?Object(n.jsx)(a.Suspense,{fallback:Object(n.jsx)("div",{className:"seatSelection-msg",children:"Loading..."}),children:Object(n.jsx)(_,{modalIsOpen:v,closeModal:function(){j(),h(!1)},onPayClick:function(){d()},amount:u,isLoading:s,apiError:i,isBookingComplete:b})}):null,Object(n.jsx)(O,{}),s?Object(n.jsx)("div",{className:"seatSelection-msg",children:"Loading..."}):i?Object(n.jsx)("div",{className:"seatSelection-msg",children:"An error occurred. Please try after some time."}):Object(n.jsxs)("div",{className:"seatSelection-container",children:[Object(n.jsx)("div",{className:"seatSelection-screen",children:"Screen this way!"}),Object(n.jsx)("div",{className:"seatSelection-seatsParent",children:t.map((function(e){return Object(n.jsx)(f,Object(S.a)(Object(S.a)({},e),{},{onSeatClick:function(){return t=e.seat_number,void l(t);var t}}),e.seat_number)}))}),Object(n.jsxs)("div",{className:"seatSelection-sampleSeats",children:[Object(n.jsxs)("div",{className:"seatSelection-sampleSeatWrapper",children:[Object(n.jsx)(f,{status:"empty"})," Available"]}),Object(n.jsxs)("div",{className:"seatSelection-sampleSeatWrapper",children:[Object(n.jsx)(f,{status:"reserved"})," Unavailable"]}),Object(n.jsxs)("div",{className:"seatSelection-sampleSeatWrapper",children:[Object(n.jsx)(f,{status:"selected"})," Selected"]})]}),Object(n.jsxs)("div",{className:"seatSelection-cost",children:["Total Price: ",u]}),Object(n.jsx)("button",{style:m,onClick:function(){E(),h(!0)},disabled:0===u,children:"Make Payment"})]})]})}))),T=function(){return Object(n.jsxs)(E.a,{children:[Object(n.jsx)(j.a,{exact:!0,path:"/movie-ticket-booking-ui/",children:Object(n.jsx)(h,{})}),Object(n.jsx)(j.a,{exact:!0,path:"/movie-ticket-booking-ui/details",children:Object(n.jsx)(_,{})}),Object(n.jsx)(j.a,{exact:!0,path:"/movie-ticket-booking-ui/seats",children:Object(n.jsx)(A,{})})]})},x=c(14),L=c(33),y={loading:!0,error:!1,allMovies:[]};var V={loading:!0,error:!1,allSeats:[],allVenues:[],selectedMovie:{},selectedVenue:"",selectedSeats:[],totalCost:0,isBookingComplete:!1};var g=Object(x.c)({homeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.FETCH_MOVIES:return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case p.FETCH_MOVIES_SUCCESS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,allMovies:t.payload});case p.FETCH_MOVIES_FAILURE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:!0});default:return y}},selectionReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.SET_SELECTED_MOVIE:return Object(S.a)(Object(S.a)({},e),{},{selectedMovie:t.payload});case v.SET_SELECTED_VENUE:return Object(S.a)(Object(S.a)({},e),{},{selectedVenue:t.payload});case v.SET_SELECTED_SEATS:var c=e.selectedSeats,n=e.allSeats,a=e.selectedSeats;a.includes(t.payload)?a.splice(a.indexOf(t.payload),1):a.push(t.payload);var r=c.length*n[0].cost;return Object(S.a)(Object(S.a)({},e),{},{selectedSeats:a,totalCost:r});case v.FETCH_VENUES:return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case v.FETCH_VENUES_SUCCESS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,allVenues:t.payload});case v.FETCH_VENUES_FAILURE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:!0});case v.FETCH_AVAILABILITIES:return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case v.FETCH_AVAILABILITIES_SUCCESS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,allSeats:t.payload});case v.FETCH_AVAILABILITIES_FAILURE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:!0});case v.MODIFY_AVAILABILITIES:return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case v.MODIFY_AVAILABILITIES_SUCCESS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,isBookingComplete:"reserved"===t.payload.seatStatus,totalCost:"empty"===t.payload.seatStatus?0:e.totalCost,selectedSeats:"empty"===t.payload.seatStatus?[]:e.selectedSeats});case v.MODIFY_AVAILABILITIES_FAILURE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:!0});default:return V}}}),F=c(9),k=c.n(F),M=c(8),N="ec2-18-217-212-15.us-east-2.compute.amazonaws.com:4000/movie-ticket-booking",U=k.a.mark(R),H=k.a.mark(B);function R(){var e;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(N,"/get-movies")).then((function(e){return e.json()}));case 3:return e=t.sent,t.next=6,Object(M.b)({type:p.FETCH_MOVIES_SUCCESS,payload:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(M.b)({type:p.FETCH_MOVIES_FAILURE,payload:t.t0});case 12:case"end":return t.stop()}}),U,null,[[0,8]])}function B(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.d)(p.FETCH_MOVIES,R);case 2:case"end":return e.stop()}}),H)}var D=k.a.mark(W),w=k.a.mark(J),Y=k.a.mark(z),P=k.a.mark(q);function W(){var e;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(N,"/get-venues")).then((function(e){return e.json()}));case 3:return e=t.sent,t.next=6,Object(M.b)({type:v.FETCH_VENUES_SUCCESS,payload:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(M.b)({type:v.FETCH_VENUES_FAILURE,payload:t.t0});case 12:case"end":return t.stop()}}),D,null,[[0,8]])}function J(){var e,t,c;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(M.c)((function(e){return e.selectionReducer.selectedMovie.movie_id}));case 3:return e=n.sent,n.next=6,Object(M.c)((function(e){return e.selectionReducer.selectedVenue}));case 6:return t=n.sent,n.next=9,fetch("".concat(N,"/get-availability/").concat(e,"/").concat(t)).then((function(e){return e.json()}));case 9:return c=n.sent,n.next=12,Object(M.b)({type:v.FETCH_AVAILABILITIES_SUCCESS,payload:c});case 12:n.next=18;break;case 14:return n.prev=14,n.t0=n.catch(0),n.next=18,Object(M.b)({type:v.FETCH_AVAILABILITIES_FAILURE,payload:n.t0});case 18:case"end":return n.stop()}}),w,null,[[0,14]])}function z(e){var t,c,n,a,r;return k.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,Object(M.c)((function(e){return e.selectionReducer.selectedMovie.movie_id}));case 3:return t=s.sent,s.next=6,Object(M.c)((function(e){return e.selectionReducer.selectedVenue}));case 6:return c=s.sent,s.next=9,Object(M.c)((function(e){return e.selectionReducer.selectedSeats}));case 9:return n=s.sent,a={movieId:t,venueName:c,seatNumbers:n,newStatus:e.payload},a=JSON.stringify(a),s.next=14,fetch("".concat(N,"/set-availability"),{method:"PUT",headers:{"Content-type":"application/json; charset=UTF-8"},body:a}).then((function(e){return e.json()}));case 14:return r=s.sent,s.next=17,Object(M.b)({type:v.MODIFY_AVAILABILITIES_SUCCESS,payload:{result:r,seatStatus:e.payload}});case 17:s.next=23;break;case 19:return s.prev=19,s.t0=s.catch(0),s.next=23,Object(M.b)({type:v.MODIFY_AVAILABILITIES_FAILURE,payload:s.t0});case 23:case"end":return s.stop()}}),Y,null,[[0,19]])}function q(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.d)(v.FETCH_VENUES,W);case 2:return e.next=4,Object(M.d)(v.FETCH_AVAILABILITIES,J);case 4:return e.next=6,Object(M.d)(v.MODIFY_AVAILABILITIES,z);case 6:case"end":return e.stop()}}),P)}var G=k.a.mark(K);function K(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.a)([B(),q()]);case 2:case"end":return e.stop()}}),G)}var Q=Object(L.a)(),X=Object(x.e)(g,Object(x.a)(Q));Q.run(K);var Z=function(e){Object(u.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsx)(b.a,{store:X,children:Object(n.jsx)(T,{})})}}]),c}(a.Component);i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(Z,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.4cb633ba.chunk.js.map