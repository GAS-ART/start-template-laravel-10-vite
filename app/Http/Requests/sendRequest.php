<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class sendRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'=>'required|min:2|max:80|regex:/^[^0-9]+$/',
            'phone'=>'required|regex:/^((\s*)?(\+)?)([- _():=+]?\d[- _():=+]?){10,12}(\s*)?$/',
            'text' => 'max:5000',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => "Не заполнено поле \"ВАШЕ ИМЯ\"",
            'name.min' => "Поле \"ИМЯ\" должно иметь 2 или больше символов",
            'name.max' => "Поле \"ИМЯ\" должно иметь не больше 80 символов",
            'name.regex' => "Поле \"ИМЯ\" не может содержать цифры",
            'phone.regex' => "Не верный формат номера телефона",
            'phone.required' => "Не заполнено поле \"Номер телефона\"",
            'text.max' => "Вы ввели слишком много символов в поле \"Сообщение\"",
        ];
    }
}
