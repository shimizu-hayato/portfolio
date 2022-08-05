<template lang="pug">
section#contact(
  class="w-full bg-neutrals-900 flex py-28 items-center relative z-10 xl:min-h-screen"
)
  div(class="mx-auto w-10/12 2xl:w-[80%] h-full")
    div(class="flex flex-col lg:flex-row h-full w-full")
      div(class="basis-full lg:self-center")
        h2(
          class="text-amber-300 inline-block font-display font-bold text-brand lg:text-xl uppercase mb-4"
        ) Contact
        h3(class="font-display font-bold text-4xl lg:text-5xl mb-8") Got a problem to solve?
        p(
          class="text-neutrals-50/60 leading-relaxed max-w-prose mb-12"
        ) 開発についてお困りごとがあれば気軽にご相談ください。 <br> ※下のフォームは飾りで配置してあるためメールアドレスでの問い合わせをお願いします。
        span
          svg(
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 inline mr-1 mb-1"
            viewBox="0 0 24 24"
            fill="currentColor"
          )
            path(
              d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"
            )
          | tokuteacher@gmail.com
      div(class="basis-full lg:self-center mt-10 lg:mt-0 lg:ml-28")
        div(id="contact-form-success" class="hidden")
          h2(class="font-display font-bold text-brand lg:text-xl uppercase mb-4") Successful!
          h3(class="font-display font-bold text-4xl lg:text-5xl mb-8") I'll be in touch with you
          img(
            src="@/assets/img/contact.svg"
            alt=""
            class="max-w-[768px]"
          )
        form(
          id="contact-form"
          name="contact"
          method="POST"
          netlify 
          data-netlify-honeypot="bot-field"
          @submit.prevent="onSubmit"
          :class="sendingClass"
        )
          input(
            type="hidden"
            name="form-name"
            value="contact"
          )
          label(
            for="form-name"
            class="block mb-2 text-sm uppercase"
          ) Name 
          div(class="relative mt-1 mb-12")
            div(class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none")
              svg(
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 opacity-60"
                viewBox="0 0 24 24"
                fill="currentColor"
              )
                path(d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z")
            input(
              type="text"
              id="form-name"
              name="name"
              maxlength="40"
              oninput="this.setCustomValidity('')"
              oninvalid="this.setCustomValidity('Name is empty.')"
              onclick="document.getElementById('form-name').classList.add('peer'); document.getElementById('form-name').classList.add('invalid:border-alert-red');"
              required
              class="bg-neutrals-700 border-[1.5px] border-neutrals-500 rounded-md block w-full pl-10 pr-10 p-2.5 focus:ring-none focus:border-brand focus:outline-none"
            )
            // validation displays
            div(class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none invisible peer-valid:visible")
              svg(
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-success-cyan"
                viewBox="0 0 20 20"
                fill="currentColor"
              )
                path(
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                )
            div(class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none invisible peer-invalid:visible")
              svg(
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-alert-red"
                viewBox="0 0 20 20"
                fill="currentColor"
              )
                path(
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                )
            span(
              class="absolute text-xs text-alert-red mt-[0.4rem] invisible peer-invalid:visible"
            ) Name is empty.
          // email input
          label(for="form-email" class="block mb-2 text-sm uppercase") Email 
          div(class="relative mt-1 mb-12")
            div(class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none")
              svg(
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 opacity-60"
                viewBox="0 0 20 20"
                fill="currentColor"
              )
                path(d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z")
                path(d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z")
            input(
              type="email"
              id="form-email"
              name="email"
              maxlength="40"
              oninput="this.setCustomValidity('')"
              oninvalid="this.setCustomValidity('Email is empty or invalid.')"
              onclick="document.getElementById('form-email').classList.add('peer'); document.getElementById('form-email').classList.add('invalid:border-alert-red');"
              pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
              required
              class="bg-neutrals-700 border-[1.5px] border-neutrals-500 rounded-md block w-full pl-10 p-2.5 focus:ring-none focus:border-brand focus:outline-none"
            )
            // validation displays
            div(class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none invisible peer-valid:visible")
              svg(
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-success-cyan"
                viewBox="0 0 20 20"
                fill="currentColor"
              )
                path(
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                )
            div(class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none invisible peer-invalid:visible")
              svg(
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-alert-red"
                viewBox="0 0 20 20"
                fill="currentColor"
              )
                path(
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                )
            span(
              class="absolute text-xs text-alert-red mt-[0.4rem] invisible peer-invalid:visible"
            ) Email is empty or invalid.

          // message textarea
          label(for="form-message" class="block mb-2 text-sm uppercase") Message
          div(class="relative mt-1 mb-12")
            textarea(
              type="text"
              id="form-message"
              name="message"
              rows="4"
              oninput="this.setCustomValidity('')"
              oninvalid="this.setCustomValidity('Message is empty.')"
              onclick="document.getElementById('form-message').classList.add('peer'); document.getElementById('form-message').classList.add('invalid:border-alert-red');"
              required
              class="block p-2.5 w-full bg-neutrals-700 rounded-lg border border-neutrals-500 focus:ring-none focus:border-brand focus:outline-none"
            )

            // vallidation display
            div(class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none invisible peer-valid:visible")
              svg(
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-success-cyan"
                viewBox="0 0 20 20"
                fill="currentColor"
              )
                path(
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                )
            div(class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none invisible peer-invalid:visible")
              svg(
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-alert-red"
                viewBox="0 0 20 20"
                fill="currentColor"
              )
                path(
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                )
            span(
              class="absolute text-xs text-alert-red mt-[0.4rem] invisible peer-invalid:visible"
            ) Message is empty.
          div(v-show="false")
            label(for="message") スパムではない場合は空欄
            input(type="text" name="bot-field" v-model="botField")
          button(
            type="submit"
            class="btn btn-btn-outline px-5 py-2 flex items-center"
          ) Hit me up 
            svg(
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 inline-block ml-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            ) 
              path(
                d="M20.563 3.34a1.002 1.002 0 0 0-.989-.079l-17 8a1 1 0 0 0 .026 1.821L8 15.445v6.722l5.836-4.168 4.764 2.084a1 1 0 0 0 1.399-.85l1-15a1.005 1.005 0 0 0-.436-.893zm-2.466 14.34-5.269-2.306L16 9.167l-7.649 4.25-2.932-1.283 13.471-6.34-.793 11.886z"
              )
</template>

<script>
export default {
  mounted: () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      let myForm = document.getElementById("contact-form");
      let formData = new FormData(myForm);
      console.log(formData)
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(
          () => console.log("Form successfully submitted")
        )
        .catch((error) => alert(error));
    };
    document
      .querySelector("form")
      .addEventListener("submit", handleSubmit);
  }
}
</script>
