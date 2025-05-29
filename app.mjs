import { ViteSSG } from "vite-ssg";
import { createHead } from "@vueuse/head";
import { resolveComponent, useSSRContext, ref, onMounted, onUnmounted, mergeProps, withCtx, createTextVNode, unref, createVNode, createBlock, openBlock, toDisplayString, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { useRouter, createRouter, createMemoryHistory } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$f = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_view = resolveComponent("router-view");
  _push(ssrRenderComponent(_component_router_view, _attrs, null, _parent));
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender]]);
const _imports_0$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEAUlEQVR4nO2bR4gVQRCGP11zxINZwbAGEBMY1nARL4oIHryYEAQzevCigoppUfHizcCCGA+GgyCICB5EREFFL4Kra0AFxZzWVdcdKehD0djz+q1vxpn2/VC8d6gOf013TXV1DZQOlcA685sUhqQwRrPxEIiAWpJDnRnjPhlEpCQJtFD9N5FBRGUDUF4BUXkLUPYB0f/gBFsBA4DxwAxggeUE1zukGthdQKodbTdYBlgIzAQmmLnInBJDV2ARUAPcBBoswlmQb2ZuNcY4XUpBvDOwF/icAYLFyidgD9CpueSHq8jLll/AC+AucBk4BRwE9lnLeVfMdoiTXTFb5ABwDDgLXAKum7m4DCER6rBiyfcAnlod3QM2AVVAR7KH9sBUM8daa+7CpXsxnZ1Xjb8Ai4GW5Acy1yXAV8XjnG/jKtXoJzCN/GI60Kj4jPNpdFQ1OET+UaP4HPZZOq9Ug1HkH2MUn1eFtvJYpfyYcKAd+sg4xYWW118fiNxTvObFGaA6AwFM0rLD1wFGgUqsI7ygFE94HFzyIicVL4lxnLilFCcSDiYrXjfiFB/4esscvwrFITrxXCkOIhwMVbyexCm+U4q9CAd9rWDIiS9KsSQJhYygm+L1MU6xXim2IRy0V7wkueNEg1JMNMeWMtopXrLKM2GASpOteZjCZWcbxUtWuRPflWJFwpPaqMaS/0mitRpLHrITjUox6QzQVjWW/E8SrdRY8pCd+KUU5SIiFANUWFkuJ5qUIgEZoKUaS1a5E1GgBsD3Wi36DwwQyy0qG4DyCojKW4DUfcC2FMbz2t5NKcYBOhJ8a1LypFBcIbFOJiLBwcCblIxQ4RsHNKZoAMFo4LUa873v/d1fhMI/4hR/pngYStMI3oehBqUojdJMWurt8MZskVKhrVVK48S3f5gRso0gRdFJJETqfVNiHUgfY0x1R22JV0BH34zQR6VYVElJxtHT8jFOvFSKAwkHlYqX3H048Siw4og/3QzFfs9wRylOIRxMVbzk/tOJi0pRSmBDwUzFS27AveoDlhIOliteR+IUtyhFKTMNBXsVr81xinOVopTAhoIritecOMX+6khc/zeFxhlCFxXiC7c+hRrcVtZaTf6x1vcN8KcGckrrR37R3zpfrPG9Sn6mGtXltF6oyir3f2YORd6Bw3crjyZOcRUwIqNX563N3FaZuUZWEkQ4FYVZwAerI32/JtfaV81HC6fM+3V/gXK1rR5VndsL9HHQxCunzdjXzJPWyRwtcsCb3VyrDjJfZ7g6z7JI8vN4qYq9+gHLgDOmlE7nDrMiTWZVyspYCfQmQbQ1n7JPMstLCpDFQPIGiVvekgr3re7c6ehjhRlrvhlb9rY8ZW8Hp/EbNCBIPjeTHcEAAAAASUVORK5CYII=";
const _sfc_main$e = {
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const isActive = ref(false);
    const isScrolled = ref(false);
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: ["z-50 flex flex-col md:flex-row items-center justify-center md:gap-5 gap-0 p-2 md:p-5 border-b-2 border-black/30 font-light bg-white fixed w-full top-0 transition-all duration-300", { "md:p-2 p-1": isScrolled.value }]
      }, _attrs))}><ul class="md:flex gap-4 bg-black/10 p-3 px-6 hidden"><li>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/about" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/dyslexia" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Dyslexia`);
          } else {
            return [
              createTextVNode("Dyslexia")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/resources" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Resources`);
          } else {
            return [
              createTextVNode("Resources")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/services" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog`);
          } else {
            return [
              createTextVNode("Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><button class="bg-[#C0DAD6] hidden p-3 px-6 rounded-b-xl md:rounded-b-none md:flex items-center justify-center gap-2 group"> Book an appointment <img class="w-4 transition-transform duration-300 group-hover:rotate-12"${ssrRenderAttr("src", _imports_0$1)} alt=""></button><div class="three col md:hidden block"><div class="${ssrRenderClass([{ "is-active": isActive.value }, "hamburger"])}"><span class="line"></span><span class="line"></span><span class="line"></span></div></div><div class="${ssrRenderClass([isActive.value ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0", "w-full md:hidden overflow-hidden transition-all duration-300 ease-in-out"])}"><ul class="${ssrRenderClass([isScrolled.value ? "bg-transparent" : "bg-black/5", "flex flex-col gap-2 p-4 rounded-lg mt-4 transition-colors duration-300"])}"><li class="${ssrRenderClass([isScrolled.value ? "hover:bg-transparent" : "hover:bg-black/10", "p-2 rounded transition-colors"])}">`);
      _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="${ssrRenderClass([isScrolled.value ? "hover:bg-transparent" : "hover:bg-black/10", "p-2 rounded transition-colors"])}">`);
      _push(ssrRenderComponent(_component_router_link, { to: "/about" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="${ssrRenderClass([isScrolled.value ? "hover:bg-transparent" : "hover:bg-black/10", "p-2 rounded transition-colors"])}">`);
      _push(ssrRenderComponent(_component_router_link, { to: "/services" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Dyslexia`);
          } else {
            return [
              createTextVNode("Dyslexia")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="${ssrRenderClass([isScrolled.value ? "hover:bg-transparent" : "hover:bg-black/10", "p-2 rounded transition-colors"])}">`);
      _push(ssrRenderComponent(_component_router_link, { to: "/services" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Resources`);
          } else {
            return [
              createTextVNode("Resources")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="${ssrRenderClass([isScrolled.value ? "hover:bg-transparent" : "hover:bg-black/10", "p-2 rounded transition-colors"])}">`);
      _push(ssrRenderComponent(_component_router_link, { to: "/services" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog`);
          } else {
            return [
              createTextVNode("Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="${ssrRenderClass([isScrolled.value ? "hover:bg-transparent" : "hover:bg-black/10", "p-2 rounded transition-colors"])}">`);
      _push(ssrRenderComponent(_component_router_link, { to: "/contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="mt-2"><button class="w-full bg-[#C0DAD6] p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#B0CAC6] transition-colors group"> Book an appointment <img class="w-4 transition-transform duration-300 group-hover:rotate-12"${ssrRenderAttr("src", _imports_0$1)} alt=""></button></li></ul></div></nav>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/NavBar.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _imports_0 = "/Lexety/assets/me-C1BLV1AF.jpg";
const _sfc_main$d = {
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "relative mt-11 md:mt-[90px] flex items-center justify-center bg-primary md:mb-10 mb-4 text-white overflow-hidden py-12 md:py-16" }, _attrs))}><div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 md:from-black/70 md:via-black/50 md:to-black/70"></div><div class="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-4"><div class="flex flex-col items-center"><div class="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-lg mb-6"><img${ssrRenderAttr("src", _imports_0)} alt="Professional portrait" class="w-full h-full object-cover"></div><div class="w-full max-w-2xl text-center"><h1 class="text-3xl md:text-5xl font-bold mb-3 md:mb-4 tracking-tight animate-fade-in leading-tight"> Lexety Education </h1><div class="space-y-2 md:space-y-3 text-sm md:text-base font-light animate-slide-up"><p class="opacity-90 leading-relaxed">Dyslexia testing for children and adults.</p><p class="opacity-90 leading-relaxed">Plus ADHD and DCD/dyspraxia assessment for adults.</p><p class="opacity-90 leading-relaxed">Qualified specialist teacher and holder of an Assessment Practising Certificate (APC).</p></div><div class="mt-6 md:mt-8 animate-fade-in-delayed"><button class="md:w-auto bg-white text-black px-5 md:px-6 py-2 md:py-2.5 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm md:text-base"> Book a Consultation </button></div></div></div></div></header>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Hero.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
  __name: "InfoBlocks",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    colour: {
      type: String,
      default: "primary"
    }
  },
  setup(__props) {
    const splitDescription = (text) => {
      return text.split(".").filter((sentence) => sentence.trim());
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:mx-10 mx-4 flex items-center justify-center flex-col gap-6" }, _attrs))} data-v-c113d631><h2 class="text-2xl md:text-3xl font-bold text-center text-gray-800" data-v-c113d631>${ssrInterpolate(__props.title)}</h2><div class="w-24 h-1 bg-[#C0DAD6] rounded-full" data-v-c113d631></div><div class="description space-y-3 text-left max-w-2xl mx-auto pb-10" data-v-c113d631><!--[-->`);
      ssrRenderList(splitDescription(__props.description), (sentence, index) => {
        _push(`<p class="text-gray-600 text-base leading-relaxed" data-v-c113d631>${ssrInterpolate(sentence.trim())}. </p>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/InfoBlocks.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const InfoBlocks = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-c113d631"]]);
const _sfc_main$b = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const testimonials = [
      {
        title: "Parent of a 14 year old",
        description: "Thank you so much! C seems to be happier/more relaxed now she has this diagnosis as if her struggles make sense and there's a reason for it all."
      },
      {
        title: "Parent of a 12 year old",
        description: "Just a quick thank you for taking the time to explain the report last week. School are on board with the recommendations and K came away feeling positive about the diagnosis."
      },
      {
        title: "Adult assessed for DSA",
        description: "The DSA needs assessor was really happy with the report. They said it was easy to read with plenty of detail."
      },
      {
        title: "Parent of a 9 year old",
        description: "Thanks for explaining the report to me in such detail. This made a real difference when I went to school. I knew what to ask for to help support E. School have really listened and they've started to put the recommendations in action."
      },
      {
        title: "Parent of a 14 year old",
        description: "Thank you so much for your time and the report. Hopefully, this will help school understand C and help alleviate some of her struggles and help her thrive!"
      },
      {
        title: "Adult assessed for DSA",
        description: "Thank you for making the whole assessment process so easy. The communication was fab and the results quick."
      },
      {
        title: "Parent of a 16 year old",
        description: "School were very impressed with your report, I don't know if they mentioned this? They have also been brilliant about accepting all your recommendations without question, so thank you so much once again for making such a difference to F's life."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-12 bg-primary" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 class="text-2xl md:text-3xl font-bold text-center mb-4">What My Clients Say</h2><div class="relative">`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: [unref(Pagination), unref(Navigation), unref(Autoplay)],
        "slides-per-view": 1,
        "space-between": 30,
        loop: true,
        autoplay: {
          delay: 7e3,
          disableOnInteraction: false
        },
        pagination: {
          clickable: true
        },
        navigation: true,
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30
          }
        },
        class: "pb-12 px-12 md:pb-16 [&_.swiper-button-next]:text-gray-800 [&_.swiper-button-next]:bg-[#C0DAD6] [&_.swiper-button-next]:w-9 [&_.swiper-button-next]:h-9 [&_.swiper-button-next]:rounded-full [&_.swiper-button-next]:shadow-md [&_.swiper-button-next]:border-[1px] [&_.swiper-button-next]:top-6 [&_.swiper-button-next]:-translate-y-0 [&_.swiper-button-next]:transition-all [&_.swiper-button-next]:duration-300 [&_.swiper-button-next]:right-0 [&_.swiper-button-next:hover]:bg-[#a8c4bf] [&_.swiper-button-next:hover]:scale-105 [&_.swiper-button-prev]:text-gray-800 [&_.swiper-button-prev]:bg-[#C0DAD6] [&_.swiper-button-prev]:w-9 [&_.swiper-button-prev]:border-[1px] [&_.swiper-button-prev]:h-9 [&_.swiper-button-prev]:rounded-full [&_.swiper-button-prev]:shadow-md [&_.swiper-button-prev]:top-6 [&_.swiper-button-prev]:-translate-y-0 [&_.swiper-button-prev]:transition-all [&_.swiper-button-prev]:duration-300 [&_.swiper-button-prev]:left-0 [&_.swiper-button-prev:hover]:bg-[#a8c4bf] [&_.swiper-button-prev:hover]:scale-105 [&_.swiper-button-next:after]:text-base [&_.swiper-button-prev:after]:text-base [&_.swiper-pagination]:bottom-0 [&_.swiper-pagination]:absolute [&_.swiper-pagination]:w-full [&_.swiper-pagination]:flex [&_.swiper-pagination]:justify-center [&_.swiper-pagination]:gap-2 [&_.swiper-pagination-bullet]:w-2.5 [&_.swiper-pagination-bullet]:h-2.5 [&_.swiper-pagination-bullet]:bg-[#C0DAD6] [&_.swiper-pagination-bullet]:opacity-50 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 [&_.swiper-pagination-bullet-active]:bg-[#C0DAD6] [&_.swiper-pagination-bullet-active]:opacity-100 [&_.swiper-pagination-bullet-active]:scale-110 [&_.swiper-slide]:h-auto sm:[&_.swiper-pagination-bullet]:w-2 sm:[&_.swiper-pagination-bullet]:h-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(testimonials, (testimonial, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="bg-white mt-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 md:p-10 h-full border border-gray-100"${_scopeId2}><div class="flex flex-col h-full"${_scopeId2}><div class="flex items-center gap-4 mb-6"${_scopeId2}><div class="w-12 h-12 bg-[#C0DAD6] rounded-full flex items-center justify-center flex-shrink-0"${_scopeId2}><svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"${_scopeId2}><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"${_scopeId2}></path></svg></div><div class="h-[1px] flex-grow bg-gradient-to-r from-[#C0DAD6] to-transparent"${_scopeId2}></div></div><p class="text-gray-700 text-base md:text-lg mb-6 italic flex-grow leading-relaxed"${_scopeId2}> &quot;${ssrInterpolate(testimonial.description)}&quot; </p><div class="pt-4 border-t border-gray-100"${_scopeId2}><p class="text-gray-900 font-medium"${_scopeId2}>${ssrInterpolate(testimonial.title)}</p></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "bg-white mt-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 md:p-10 h-full border border-gray-100" }, [
                        createVNode("div", { class: "flex flex-col h-full" }, [
                          createVNode("div", { class: "flex items-center gap-4 mb-6" }, [
                            createVNode("div", { class: "w-12 h-12 bg-[#C0DAD6] rounded-full flex items-center justify-center flex-shrink-0" }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-6 h-6 text-white",
                                fill: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", { d: "M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" })
                              ]))
                            ]),
                            createVNode("div", { class: "h-[1px] flex-grow bg-gradient-to-r from-[#C0DAD6] to-transparent" })
                          ]),
                          createVNode("p", { class: "text-gray-700 text-base md:text-lg mb-6 italic flex-grow leading-relaxed" }, ' "' + toDisplayString(testimonial.description) + '" ', 1),
                          createVNode("div", { class: "pt-4 border-t border-gray-100" }, [
                            createVNode("p", { class: "text-gray-900 font-medium" }, toDisplayString(testimonial.title), 1)
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(testimonials, (testimonial, index) => {
                return createVNode(unref(SwiperSlide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "bg-white mt-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 md:p-10 h-full border border-gray-100" }, [
                      createVNode("div", { class: "flex flex-col h-full" }, [
                        createVNode("div", { class: "flex items-center gap-4 mb-6" }, [
                          createVNode("div", { class: "w-12 h-12 bg-[#C0DAD6] rounded-full flex items-center justify-center flex-shrink-0" }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-6 h-6 text-white",
                              fill: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", { d: "M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" })
                            ]))
                          ]),
                          createVNode("div", { class: "h-[1px] flex-grow bg-gradient-to-r from-[#C0DAD6] to-transparent" })
                        ]),
                        createVNode("p", { class: "text-gray-700 text-base md:text-lg mb-6 italic flex-grow leading-relaxed" }, ' "' + toDisplayString(testimonial.description) + '" ', 1),
                        createVNode("div", { class: "pt-4 border-t border-gray-100" }, [
                          createVNode("p", { class: "text-gray-900 font-medium" }, toDisplayString(testimonial.title), 1)
                        ])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Testimonials.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 border-t border-gray-100 md:flex items-center justify-center" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="space-y-4"><h3 class="text-lg font-semibold text-gray-900">Contact</h3><div class="space-y-2"><p class="text-gray-600">Email: <a href="mailto:hello@lexety.com" class="text-gray-600">hello@lexety.com</a></p><p class="text-gray-600">Phone: <a href="tel:+441234567890" class="text-gray-600">07971 810 841</a></p></div></div><div class="space-y-4"><h3 class="text-lg font-semibold text-gray-900">Quick Links</h3><ul class="space-y-2"><li><a href="#about" class="text-gray-600">About</a></li><li><a href="#services" class="text-gray-600">Services</a></li><li><a href="#testimonials" class="text-gray-600">Testimonials</a></li><li><a href="#contact" class="text-gray-600">Contact</a></li></ul></div><div class="space-y-4"><h3 class="text-lg font-semibold text-gray-900">Follow Me</h3><div class="flex space-x-4"><a href="#" class="text-gray-600"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg></a><a href="#" class="text-gray-600"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg></a><a href="#" class="text-gray-600"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a></div></div></div><div class="mt-12 pt-8 border-t border-gray-100"><p class="text-center text-gray-500 text-sm"> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Lexety </p></div></div></footer>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Footer.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "Blog",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const blogs = ref([
      {
        id: 1,
        title: "Does Dyslexia Exist?",
        excerpt: "Some people question whether dyslexia is real or simply a label for general reading struggles",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3",
        date: "March 14",
        readTime: "2 min read"
      },
      {
        id: 2,
        title: "The New Delphi Definition of Dyslexia",
        excerpt: "On 25th February 2025, a new definition of dyslexia was confirmed by experts using the Delphi method",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3",
        date: "2025-02-26",
        readTime: "2 min read"
      },
      {
        id: 3,
        title: "Do I have dyslexia?",
        excerpt: "How do I know if I have dyslexia?",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3",
        date: "Jan 31",
        readTime: "1 min read"
      }
    ]);
    const swiperOptions = {
      modules: [Navigation, Pagination, Autoplay],
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5e5,
        disableOnInteraction: false
      },
      pagination: {
        clickable: true
      },
      navigation: true
    };
    const goToBlog = (blogId) => {
      router.push(`/blog/${blogId}`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 bg-gray-50" }, _attrs))}><div class="container mx-auto px-4"><h2 class="text-2xl md:text-3xl font-bold text-center pb-0">Latest Blog Posts</h2><div class="max-w-4xl mx-auto">`);
      _push(ssrRenderComponent(unref(Swiper), mergeProps(swiperOptions, { class: "blog-swiper" }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(blogs.value, (blog) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: blog.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl mt-10"${_scopeId2}><div class="relative"${_scopeId2}><img${ssrRenderAttr("src", blog.image)}${ssrRenderAttr("alt", blog.title)} class="w-full h-64 object-cover"${_scopeId2}><div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"${_scopeId2}></div></div><div class="p-8"${_scopeId2}><div class="flex justify-between items-center mb-4"${_scopeId2}><span class="text-sm text-gray-500"${_scopeId2}>${ssrInterpolate(blog.date)}</span><span class="text-sm text-gray-500"${_scopeId2}>${ssrInterpolate(blog.readTime)}</span></div><h3 class="text-2xl font-bold mb-4 text-gray-800"${_scopeId2}>${ssrInterpolate(blog.title)}</h3><p class="text-gray-600 mb-6"${_scopeId2}>${ssrInterpolate(blog.excerpt)}</p><button class="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"${_scopeId2}> Read More <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${_scopeId2}></path></svg></button></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl mt-10" }, [
                        createVNode("div", { class: "relative" }, [
                          createVNode("img", {
                            src: blog.image,
                            alt: blog.title,
                            class: "w-full h-64 object-cover"
                          }, null, 8, ["src", "alt"]),
                          createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" })
                        ]),
                        createVNode("div", { class: "p-8" }, [
                          createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                            createVNode("span", { class: "text-sm text-gray-500" }, toDisplayString(blog.date), 1),
                            createVNode("span", { class: "text-sm text-gray-500" }, toDisplayString(blog.readTime), 1)
                          ]),
                          createVNode("h3", { class: "text-2xl font-bold mb-4 text-gray-800" }, toDisplayString(blog.title), 1),
                          createVNode("p", { class: "text-gray-600 mb-6" }, toDisplayString(blog.excerpt), 1),
                          createVNode("button", {
                            onClick: ($event) => goToBlog(blog.id),
                            class: "inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
                          }, [
                            createTextVNode(" Read More "),
                            (openBlock(), createBlock("svg", {
                              class: "w-4 h-4 ml-2",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M9 5l7 7-7 7"
                              })
                            ]))
                          ], 8, ["onClick"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(blogs.value, (blog) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: blog.id
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl mt-10" }, [
                      createVNode("div", { class: "relative" }, [
                        createVNode("img", {
                          src: blog.image,
                          alt: blog.title,
                          class: "w-full h-64 object-cover"
                        }, null, 8, ["src", "alt"]),
                        createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" })
                      ]),
                      createVNode("div", { class: "p-8" }, [
                        createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                          createVNode("span", { class: "text-sm text-gray-500" }, toDisplayString(blog.date), 1),
                          createVNode("span", { class: "text-sm text-gray-500" }, toDisplayString(blog.readTime), 1)
                        ]),
                        createVNode("h3", { class: "text-2xl font-bold mb-4 text-gray-800" }, toDisplayString(blog.title), 1),
                        createVNode("p", { class: "text-gray-600 mb-6" }, toDisplayString(blog.excerpt), 1),
                        createVNode("button", {
                          onClick: ($event) => goToBlog(blog.id),
                          class: "inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
                        }, [
                          createTextVNode(" Read More "),
                          (openBlock(), createBlock("svg", {
                            class: "w-4 h-4 ml-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M9 5l7 7-7 7"
                            })
                          ]))
                        ], 8, ["onClick"])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Blog.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "HomeView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$e, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(ssrRenderComponent(InfoBlocks, {
        colour: "primary",
        title: "Meet Chrissy",
        description: "Chrissy is an experienced specialist teacher committed to helping individuals with dyslexia and literacy difficulties. She offers full testing for dyslexia for children and adults, including personalised recommendations to support learning in school, college and university.\n    Additionally, Chrissy offers ADHD assessment and DCD/dyspraxia assessment for adults.\n    Dyslexia testing can take place online or in Truro, Cornwall.\n    If you have any questions about dyslexia testing online or dyslexia assessment in Truro, Cornwall, contact Chrissy at Lexety Education."
      }, null, _parent));
      _push(ssrRenderComponent(InfoBlocks, {
        colour: "black/10",
        title: "Do I need a dyslexia test?",
        description: "Dyslexia is a specific learning difficulty that primarily affects skills involved in accurate and fluent reading and spelling. It is a lifelong condition that impacts how the brain processes information..\n        People with dyslexia often experience challenges in reading fluently, spelling, and writing speed. Common signs may include:.\n        \n        • Struggles learning letter sounds.\n        • Difficulties remembering sequences such as the alphabet or days of the week.\n        • Difficulty blending letters to form words.\n        • Confusing visually similar words when reading.\n        • Problems with spelling.\n        • Slower reading and writing speeds.\n        • Needing to re-read paragraphs for comprehension.\n        \n        Dyslexia is not related to intelligence, and with proper support, individuals can achieve success.\n        \n        If you or your child are experiencing signs of dyslexia, contact Chrissy about dyslexia testing to see if it is the right option."
      }, null, _parent));
      _push(ssrRenderComponent(InfoBlocks, {
        colour: "primary",
        title: "What happens during a dyslexia test?",
        description: "A comprehensive assessment includes a variety of tests that evaluate different skills, such as:\n        \n        • Underlying ability.\n        • Working memory.\n        • Phonological awareness.\n        • Phonological processing speed.\n        • Spelling.\n        • Writing.\n        • Reading.\n        \n        Testing for dyslexia takes about three hours, and within two to three weeks, you will receive a 25-30-page follow-up report via email. This report includes individualised recommendations to support school, college, or university learning."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$b, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/HomeView.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const qualifications$1 = [
  "Assessment Practising Certificate (APC)",
  "Associate Member of the British Dyslexia Association (AMBDA)",
  "Member of Dyslexia Guild (MDG)",
  "Member of PATOSS",
  "Accredited Teacher Status (British Dyslexia Association)",
  "MA Education (Special Educational Needs and Inclusion)",
  "PG Cert Dyslexia and Literacy Difficulties",
  "PG Cert Applied Psychology",
  "PGCE Primary",
  "Qualified Teacher Status (QTS)",
  "BA (Hons) Education and Training"
];
const _sfc_main$7 = {
  __name: "AboutView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$e, null, null, _parent));
      _push(`<section class="flex flex-col justify-center max-w-3xl mx-auto gap-6 mt-32 pb-20 px-4"><div class="text-center mb-8"><h2 class="font-bold text-3xl mb-4 text-gray-800">About Lexety Education</h2><div class="w-24 h-1 bg-[#C0DAD6] mx-auto rounded-full"></div></div><div class="prose prose-lg max-w-none"><p class="text-gray-700 leading-relaxed"> As a qualified teacher, Chrissy brings this experience to her assessment work. She offers recommendations and advice based on her knowledge and expertise. </p><p class="text-gray-700 leading-relaxed mt-6"> She offers full diagnostic assessment for dyslexia and holds the following qualifications: </p><ul class="list-none space-y-0 mt-4"><!--[-->`);
      ssrRenderList(qualifications$1, (qualification, index) => {
        _push(`<li class="flex items-center text-gray-700"><span class="text-blue-600 mr-2">•</span> ${ssrInterpolate(qualification)}</li>`);
      });
      _push(`<!--]--></ul><p class="text-gray-700 leading-relaxed mt-8"> Dyslexia testing can take place online or in Truro, Cornwall.​ If you have questions about dyslexia testing online or dyslexia assessment in Truro, Cornwall, contact Chrissy at Lexety Education. </p><div class="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100"><p class="text-gray-700"> Chrissy has an enhanced DBS check on the Update Service. </p></div></div></section>`);
      _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/AboutView.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "ContactView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$e, _attrs, null, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/ContactView.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "NotFoundView",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$e, null, null, _parent));
      _push(`<div class="min-h-[calc(100vh-200px)] flex items-center justify-center p-8 bg-gray-50"><div class="text-center max-w-2xl p-12 bg-white rounded-xl shadow-md"><h1 class="text-8xl font-bold text-red-600 m-0 leading-none">404</h1><h2 class="text-3xl text-gray-800 my-4">Page Not Found</h2><p class="text-lg text-blue-600 mb-8"> Oops! The page you&#39;re looking for seems to have vanished into thin air. </p><button class="bg-gray-800 text-white px-8 py-4 text-lg rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-700"> Return to Home </button></div></div>`);
      _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/NotFoundView.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "NewDefinition",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const blogPost = ref({
      id: 2,
      title: "The New Delphi Definition of Dyslexia: What It Means for You",
      content: `
        <p class="mb-4">On 25th February 2025, a new definition of dyslexia was confirmed by experts using the Delphi method. This new definition is an important step forward in recognising the wide range of difficulties people with dyslexia face. It will help ensure that more people receive the support they need.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">What Does the New Definition Say?</h2>
        <p class="mb-4">The new Delphi definition describes dyslexia as a set of processing difficulties that affect learning to read and spell. This means that dyslexia is not just about struggling with literacy but about the way the brain processes information. The definition also highlights that dyslexia exists on a continuum, meaning that it affects people in different ways and to different degrees.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">How Will This Change Dyslexia Assessments?</h2>
         <p class="mb-4">If you or your child are being assessed for dyslexia, this new definition means that:</p>
        <ul class="list-disc pl-6 mb-4">
            <li>More people may be recognised as having dyslexia. Because the definition is broader, it acknowledges that dyslexia can present in different ways, not just through traditional reading and spelling difficulties. </li>
            <li>Early identification and intervention will improve. Since dyslexia is now seen as a spectrum, professionals can spot signs earlier, even if difficulties are mild or don’t fit the previous strict criteria. </li>
            <li>Support plans will be more personalised. Understanding dyslexia as a broader condition means that the recommendations in an assessment report can be even more tailored to  meet individual needs.</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">A More Inclusive Approach</h2>
        <p class="mb-4">The new definition is a big step forward because:</p>
        <p>It goes beyond phonics difficulties. While struggling with processing the sounds in words is common in dyslexia, other factors - such as struggling to recognise and remmeber letter patterns and words - also plays a role.</p>
        <p>It recognises overlapping difficulties. Many people with dyslexia also have challenges with maths (dyscalculia), attention (ADHD), or coordination (dyspraxia), and these will now be taken into account. </p>
        <p>It applies across all ages. Dyslexia is now understood as a lifelong condition that affects people at school, in work, and in daily life.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">What This Means for You</h2>
        <p class="mb-4">If you are seeking a dyslexia assessment, this new definition means that the process will be even more comprehensive and inclusive. It allows for a better understanding of your strengths and challenges, leading to the right support and strategies to help you thrive.</p>
    `,
      date: "2024-03-20",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$e, null, null, _parent));
      _push(`<article class="max-w-4xl mx-auto px-4 py-16"><button class="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Back to Blog </button><div class="bg-white rounded-xl shadow-lg overflow-hidden"><div class="relative"><img${ssrRenderAttr("src", blogPost.value.image)}${ssrRenderAttr("alt", blogPost.value.title)} class="w-full h-96 object-cover"><div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div></div><div class="p-8"><div class="flex justify-between items-center mb-6"><span class="text-sm text-gray-500">${ssrInterpolate(blogPost.value.date)}</span><span class="text-sm text-gray-500">${ssrInterpolate(blogPost.value.readTime)}</span></div><h1 class="text-4xl font-bold mb-8 text-gray-800">${ssrInterpolate(blogPost.value.title)}</h1><div class="prose prose-lg max-w-none">${blogPost.value.content ?? ""}</div></div></div></article>`);
      _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/blogs/NewDefinition.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "DyslexiaExist",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const blogPost = ref({
      id: 1,
      title: "Does Dyslexia Exist?",
      content: `
        <p class="mb-4">Dyslexia, a learning difficulty affecting reading and spelling, has long sparked debate. Some people question whether dyslexia is real or simply a label for general reading struggles. The recent Delphi study (Carroll et al., 2025) helps clarify this discussion.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Why Do Some People Think Dyslexia Doesn't Exist?</h2>
        <p class="mb-4">In the past, public perception led to the idea that dyslexia not a real condition. This was based on the notion that children who were straggling with literacy skills were simply “stupid”. However, more recent research has shown that dyslexia is not related to intelligence.</p>
        <p>Additionally, some critics argue that dyslexia is no different from general reading difficulties. For instance, Professor Julian Elliott describes dyslexia as a "meaningless label." He believes that rather than using specific labels, we should focus on improving the reading skills of all struggling readers.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Evidence Supporting Dyslexia's Existence</h2>
         <p class="mb-4">Despite these criticisms, significant scientific evidence supports dyslexia as a specific condition. Studies have found clear differences in the brain structures of people with dyslexia, especially in areas linked to language and reading. Genetics also play a role, with certain genes increasing the likelihood of having dyslexia.</p>
        <p>The Delphi study, involving experts from different fields, further supports the idea that dyslexia is real. Experts agree dyslexia typically involves persistent problems with word reading spelling fluency, usually due to difficulties processing language sounds (phonological processing). They also highlight that dyslexia varies in terms of how it impacts an individual and it often appears alongside other conditions, such as ADHD and autism.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
        <p class="mb-4">While discussions around the exact definition continue, scientific evidence and expert consensus strongly indicate dyslexia is a genuine condition. Recognising dyslexia as real helps ensure individuals access the right support, making a real difference in their lives.</p>
    `,
      date: "2025-03-14",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$e, null, null, _parent));
      _push(`<article class="max-w-4xl mx-auto px-4 py-16"><button class="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Back to Blog </button><div class="bg-white rounded-xl shadow-lg overflow-hidden"><div class="relative"><img${ssrRenderAttr("src", blogPost.value.image)}${ssrRenderAttr("alt", blogPost.value.title)} class="w-full h-96 object-cover"><div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div></div><div class="p-8"><div class="flex justify-between items-center mb-6"><span class="text-sm text-gray-500">${ssrInterpolate(blogPost.value.date)}</span><span class="text-sm text-gray-500">${ssrInterpolate(blogPost.value.readTime)}</span></div><h1 class="text-4xl font-bold mb-8 text-gray-800">${ssrInterpolate(blogPost.value.title)}</h1><div class="prose prose-lg max-w-none">${blogPost.value.content ?? ""}</div></div></div></article>`);
      _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/blogs/DyslexiaExist.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "HaveDyslexia",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const blogPost = ref({
      id: 3,
      title: "How Do I Know if I Have Dyslexia?",
      content: `
        <p class="mb-4">Dyslexia is a common learning difference that affects reading, writing, and information processing. While often diagnosed in childhood, many adults may have undiagnosed dyslexia. If you've always struggled with certain tasks but never understood why, you might be wondering if dyslexia could be the explanation. Let's explore the common signs of dyslexia in adults and the benefits of getting a full assessment.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Common Signs of Dyslexia in Adults</h2>
        <h2 class="font-bold">Reading and Writing Difficulties</h2>
        <ul class="list-disc pl-6 mb-4">
            <li>Slow reading speed and difficulty reading aloud</li>
            <li>Trouble sounding out unfamiliar words</li>
            <li>Poor spelling, often spelling the same word differently each time</li>
            <li>Avoiding reading or writing tasks whenever possible</li>
            <li>Difficulty expressing thoughts in writing compared to speaking</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Information Processing Challenges</h2>
        <ul class="list-disc pl-6 mb-4">
            <li>Confusion when given multiple instructions at once</li>
            <li>Difficulty scanning or skimming text</li>
            <li>Trouble focusing on one task or becoming easily distracted</li>
            <li>Feeling overwhelmed when filling out forms</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Memory and Organisation Issues</h2>
        <ul class="list-disc pl-6 mb-4">
            <li>Forgetting conversations or important dates</li>
            <li>Struggling with personal organisation and time management</li>
            <li>Difficulty remembering sequences like days of the week or the alphabet</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Other Indicators</h2>
        <ul class="list-disc pl-6 mb-4">
            <li>Confusing visually similar words (e.g., "cat" and "cot")</li>
            <li>Struggling with left and right directions</li>
            <li>Difficulty with mental arithmetic or administrative tasks</li>
            <li>Low self-esteem, especially if dyslexia was undiagnosed earlier in life</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Benefits of a Full Dyslexia Assessment</h2>
        <p>If you recognise many of these signs in yourself, you might consider getting a full dyslexia assessment. Here's why it can be beneficial:</p>
        <ul class="list-ordered pl-6 mb-4">
            <li>Understanding Yourself Better: A diagnosis can explain lifelong struggles and boost your self-esteem by understanding that your difficulties are not due to lack of intelligence or effort.)</li>
            <li>Access to Support: A formal diagnosis can help you access accommodations in educational settings or the workplace, such as extra time for exams or assistive technology.</li>
            <li>Tailored Strategies: An assessment provides a detailed picture of your cognitive profile, including strengths and weaknesses. This information can help develop personalized strategies to overcome challenges.</li>
            <li>Emotional Relief: Many adults report feeling relieved after receiving a diagnosis, as it provides an explanation for their struggles and validates their experiences</li>
        </ul>

        <p>Remember, dyslexia is a difference in learning, not a measure of intelligence. Many successful individuals have dyslexia and have developed unique strengths because of it. If you suspect you might have dyslexia, consider having an assessment. It's never too late to gain insights into you’re the way your mind works and unlock your full potential.</p>
    `,
      date: "Jan 31",
      readTime: "1 min read",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$e, null, null, _parent));
      _push(`<article class="max-w-4xl mx-auto px-4 py-16"><button class="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Back to Blog </button><div class="bg-white rounded-xl shadow-lg overflow-hidden"><div class="relative"><img${ssrRenderAttr("src", blogPost.value.image)}${ssrRenderAttr("alt", blogPost.value.title)} class="w-full h-96 object-cover"><div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div></div><div class="p-8"><div class="flex justify-between items-center mb-6"><span class="text-sm text-gray-500">${ssrInterpolate(blogPost.value.date)}</span><span class="text-sm text-gray-500">${ssrInterpolate(blogPost.value.readTime)}</span></div><h1 class="text-4xl font-bold mb-8 text-gray-800">${ssrInterpolate(blogPost.value.title)}</h1><div class="prose prose-lg max-w-none">${blogPost.value.content ?? ""}</div></div></div></article>`);
      _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/blogs/HaveDyslexia.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const qualifications = [
  "Struggles learning letter sounds",
  "Difficulties remembering sequences such as the alphabet or days of the week",
  "Difficulty blending letters to form words",
  "Confusing visually similar words when reading",
  "Problems with spelling",
  "Slower reading and writing speeds",
  "Needing to re-read paragraphs for comprehension"
];
const _sfc_main$1 = {
  __name: "DyslexiaView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$e, null, null, _parent));
      _push(`<section class="flex flex-col justify-center max-w-3xl mx-auto gap-6 mt-32 pb-20 px-4"><div class="text-center mb-8"><h2 class="font-bold text-3xl mb-4 text-gray-800">Dyslexia Assessment</h2><p>Testing for dyslexia goes beyond simply providing a diagnosis. It not only identifies if dyslexia is present but it also offers a detailed profile of an individual&#39;s strengths and areas requiring support in school, college, university, and at home.​</p><div class="w-24 h-1 bg-[#C0DAD6] mx-auto rounded-full mt-4"></div></div><div class="prose prose-lg max-w-none"><h3 class="font-bold text-xl mb-6">Do I need a dyslexia assessment?</h3><p class="text-gray-700 leading-relaxed"> Dyslexia is a specific learning difficulty that primarily affects skills involved in accurate and fluent reading and spelling. It is a lifelong condition that impacts how the brain processes information. </p><p class="text-gray-700 leading-relaxed mt-6"> People with dyslexia often experience challenges in reading fluently, spelling, and writing speed. Common signs may include: </p><ul class="list-disc ml-4 space-y-0 mt-4"><!--[-->`);
      ssrRenderList(qualifications, (qualification, index) => {
        _push(`<li class="text-gray-700">${ssrInterpolate(qualification)}</li>`);
      });
      _push(`<!--]--></ul><p class="text-gray-700 leading-relaxed mt-8"> Dyslexia is not related to intelligence, and with proper support, individuals can achieve success. <br><br> If you or your child are experiencing signs of dyslexia, contact Chrissy about dyslexia testing to see if it is the right option. </p></div><div class="prose prose-lg max-w-none mt-10"><h3 class="font-bold text-xl mb-8">What happens before a dyslexia assessment?</h3><h4 class="mb-4 underline">Pre-16 Assessment</h4><p class="text-gray-700 leading-relaxed"> Before a dyslexia assessment, you will receive a questionnaire to complete about your child. Additionally, you will be given a questionnaire to forward to their school. </p><p class="text-gray-700 leading-relaxed mt-6"> If further information is needed, Chrissy will contact you to arrange a telephone meeting. This information, combined with the data from the assessment and school, will be used to make a diagnostic decision. </p><p class="text-gray-700 leading-relaxed mt-6"> It is natural to feel unsure about the unknown. If your child feels anxious or worried about the assessment process, don&#39;t hesitate to get in touch with Chrissy to discuss how your child&#39;s individual needs can be met. ​ </p><h4 class="underline mb-4 mt-10">Post-16 and Adult Assessment</h4><p class="text-gray-700 leading-relaxed"> Before a dyslexia assessment, you will receive a questionnaire to complete. Completing this with a family member who knows about your birth and developmental history is helpful. </p><p class="text-gray-700 leading-relaxed mt-6"> If further information is needed, Chrissy will contact you to arrange a telephone meeting. This information, combined with the data from the assessment, will be used to make a diagnostic decision.​ </p></div><div class="prose prose-lg max-w-none mt-10"><h3 class="font-bold text-xl mb-8">What happens during a dyslexia assessment?</h3><p class="text-gray-700 leading-relaxed"> On the day of the assessment, various dyslexia tests will be conducted, with opportunities for breaks as needed. The tests cover the following areas: </p><ul class="list-disc ml-4 space-y-0 mt-4 text-gray-700"><li>Underlying Ability: This includes verbal and visual abilities.</li><li>Cognitive Ability: This includes assessments for memory, phonological processing, and processing speed.</li><li>Attainment: This includes an assessment of reading, writing, and spelling. Maths may be included if identified as an area of need.</li></ul><p class="text-gray-700 leading-relaxed mt-6"> Dyslexia testing takes approximately three hours, sometimes longer depending on individual needs. Within three weeks, you will receive a comprehensive diagnostic report. If you wish, a 30-minute telephone call can be arranged to discuss the findings. </p></div><div class="prose prose-lg max-w-none mt-10"><h3 class="font-bold text-xl mb-8">How much does an assessment cost?</h3><div class="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100"><p class="text-gray-700"> A full test for dyslexia for a child or adult costs £395. </p></div><div class="mt-2 p-4 bg-blue-50 rounded-lg border border-blue-100"><p class="text-gray-700"> Dyslexia assessment can take place online or in Truro, Cornwall. </p></div><p class="text-gray-700 leading-relaxed mt-6"> If you have any questions about dyslexia testing online or dyslexia assessment in Truro, Cornwall, contact Chrissy at Lexety Education. </p><button class="text-gray-700 mt-6 bg-blue-50 px-6 py-2 duration-500 hover:bg-blue-100 border-blue-100 rounded-lg border">Book now</button></div></section>`);
      _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/DyslexiaView.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const linkIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABd0lEQVR4nO2WsU7CUBSGv8luAhprLMpb+CAmogMLDwAOvqEuYFQ0wQFIiIObOgmTDJib/CQ3zS0p9NSJP7kJLSfn7zn33K+FnbZXBHSBPjDX6uteREk6BV6BZcZ6AerWpg1gKoMRcAHsAwnQBMaeuVnlZ56pa2s1EFPzzDsWppHXXmdaWRPb9OIK60bJ3jMq9ZUo9sfC+EHJXDX8p/FMyQ51HQPPwF0g9kqxPQvjLyU7kulQ164Tvtw2TCyH617JboE3/R7qIVaqaKCWwMDqOLVTkEib1jzTqY6eidzA/AZMj4EW8OGZNoqw91vtbct0GDC9BhZeFwbCqRl7Q5WeA596yJ4Gac+CvQfqQNaelsbeeM30lsbeOGNPXXvN2DsKsPcxY5Dcnpqx9zLwnxuWp9SRWViz9yRHbMuSvbOcxjUPDibs7ed4zZXC3q4SjlVVWtWy2Bvpg2xl3hQaE71PJ9uyN4/qnnlobczeTSvvaGLnRdi7E57+APHIojLsmNzxAAAAAElFTkSuQmCC";
const _sfc_main = {
  __name: "ResourcesView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$e, null, null, _parent));
      _push(`<section class="flex flex-col justify-center max-w-3xl mx-auto gap-6 mt-32 pb-20 px-4"><div class="text-center mb-8"><h2 class="font-bold text-3xl mb-4 text-gray-800">Resources</h2><p>Below are resources and organisations which focus on dyslexia.​</p><div class="w-24 h-1 bg-[#C0DAD6] mx-auto rounded-full mt-4"></div></div><div class="prose prose-lg max-w-none"><h3 class="font-bold text-xl mb-6">Useful links</h3><p class="text-gray-700 leading-relaxed mb-8"> These organisations offer help, advice and support in relation to dyslexia. </p><div class="space-y-8"><div class="group"><a href="https://www.bdadyslexia.org.uk/" target="_blank" class="text-lg font-semibold text-[#2C5282] hover:text-[#1A365D] transition-colors duration-200 inline-flex items-center gap-2"> British Dyslexia Association (BDA) <img${ssrRenderAttr("src", unref(linkIcon))} alt="External link" class="w-4 h-4"></a><p class="mt-2 text-gray-700 leading-relaxed"> The British Dyslexia Association has been the voice of dyslexic people since 1972. They are a membership organisation working to achieve a dyslexia-friendly society for all. </p></div><div class="group"><a href="https://www.patoss-dyslexia.org/" target="_blank" class="text-lg font-semibold text-[#2C5282] hover:text-[#1A365D] transition-colors duration-200 inline-flex items-center gap-2"> Professional Association of Teachers of Students with Specific Learning Difficulties (PATOSS) <img${ssrRenderAttr("src", unref(linkIcon))} alt="External link" class="w-4 h-4"></a><p class="mt-2 text-gray-700 leading-relaxed"> Patoss is the professional association of teachers of students with specific learning difficulties, for all those concerned with the teaching and support of pupils with SpLD, for example: dyslexic, dyspraxic, dyscalculic, ADHD. </p></div><div class="group"><a href="https://www.dyslexic.org.uk/" target="_blank" class="text-lg font-semibold text-[#2C5282] hover:text-[#1A365D] transition-colors duration-200 inline-flex items-center gap-2"> Dyslexia Research Trust <img${ssrRenderAttr("src", unref(linkIcon))} alt="External link" class="w-4 h-4"></a><p class="mt-2 text-gray-700 leading-relaxed"> The mission of the Dyslexia Research Trust (DRT) is to help people with reading difficulties, especially young children, to achieve their full potential in life. </p></div><div class="group"><a href="http://www.thedyslexia-spldtrust.org.uk/" target="_blank" class="text-lg font-semibold text-[#2C5282] hover:text-[#1A365D] transition-colors duration-200 inline-flex items-center gap-2"> Dyslexia SpLD Trust <img${ssrRenderAttr("src", unref(linkIcon))} alt="External link" class="w-4 h-4"></a><p class="mt-2 text-gray-700 leading-relaxed"> The Dyslexia-SpLD-Trust, or the Trust, is a collaboration of voluntary and community organisations with funding from the Department for Education to provide reliable information to parents, teachers, schools and the wider sector. It acts as the important communication channel between government, leading dyslexia organisations, parents, schools, colleges, teachers and the sector. </p></div></div></div></section>`);
      _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/ResourcesView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const routes = [
  {
    path: "/",
    name: "home",
    component: _sfc_main$8,
    meta: {
      title: "Lexety",
      description: "Home"
    }
  },
  {
    path: "/contact",
    name: "contact",
    component: _sfc_main$6,
    meta: {
      title: "Contact me",
      description: "Contact Me"
    }
  },
  {
    path: "/about",
    name: "about",
    component: _sfc_main$7,
    meta: {
      title: "About me",
      description: "| Lexety Education"
    }
  },
  {
    path: "/dyslexia",
    name: "dyslexia",
    component: _sfc_main$1,
    meta: {
      title: "Dyslexia",
      description: "| Lexety Education"
    }
  },
  {
    path: "/resources",
    name: "resources",
    component: _sfc_main,
    meta: {
      title: "Resources",
      description: "| Lexety Education"
    }
  },
  {
    path: "/blog/1",
    name: "dyslexia-exist",
    component: _sfc_main$3,
    meta: {
      title: "Does Dyslexia Exist",
      description: "Real or label"
    }
  },
  {
    path: "/blog/2",
    name: "new-definition",
    component: _sfc_main$4,
    meta: {
      title: "The New Delphi Definition of Dyslexia",
      description: "On 25th February 2025, a new definition of dyslexia was confirmed by experts using the Delphi method"
    }
  },
  {
    path: "/blog/3",
    name: "have-dyslexia",
    component: _sfc_main$2,
    meta: {
      title: "Do I have dyslexia?",
      description: "How do I know if I have dyslexia?"
    }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: _sfc_main$5,
    meta: {
      title: "404 Not Found",
      description: "The page you are looking for could not be found. Please check the URL or go back to the homepage."
    }
  }
];
createRouter({
  history: createMemoryHistory("/Lexety/"),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});
ViteSSG(
  App,
  {
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    }
  },
  ({ app, router, isClient }) => {
    const head = createHead();
    app.use(head);
    router.beforeEach((to, from, next) => {
      var _a, _b, _c, _d;
      head.push({
        title: (_a = to.meta) == null ? void 0 : _a.title,
        meta: [
          {
            name: "description",
            content: (_b = to.meta) == null ? void 0 : _b.description
          },
          {
            property: "og:title",
            content: (_c = to.meta) == null ? void 0 : _c.title
          },
          {
            property: "og:description",
            content: (_d = to.meta) == null ? void 0 : _d.description
          }
        ]
      });
      next();
    });
  }
);
