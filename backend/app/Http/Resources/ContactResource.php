<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\SocialLink;

class ContactResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'hero' => [
                'badge' => 'Available for Projects',
                'title' => 'Let\'s build something',
                'highlight' => 'exceptional together.',
                'description' => 'I\'m currently seeking new opportunities to collaborate on high-impact digital products. Whether you have a specific project in mind or just want to say hello, my inbox is always open.',
            ],
            'contactInfo' => [
                [
                    'id' => 1,
                    'icon' => 'mail',
                    'title' => 'Email Me',
                    'subtitle' => 'I typically respond within 24 hours.',
                    'value' => 'juanreyes1321@outlook.com',
                    'link' => 'mailto:juanreyes1321@outlook.com',
                ],
                [
                    'id' => 2,
                    'icon' => 'call',
                    'title' => 'Phone',
                    'subtitle' => 'Available for calls and messages.',
                    'value' => '+1 (809) 396-5015',
                    'link' => 'tel:+18093965015',
                ],
                [
                    'id' => 3,
                    'icon' => 'location_on',
                    'title' => 'Location',
                    'subtitle' => 'Currently based in Santo Domingo, DR.',
                    'value' => 'Open to remote and hybrid roles.',
                    'link' => null,
                ],
            ],
            'socialLinks' => SocialLink::orderBy('order')->get(),
            'location' => [
                'imageUrl' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-FtjDLzMeXCG2OSVyso0Jz6x49PqgTKWoJRk_i4Yb_YvDBO4bCYnZiMGriRlh64Zz3USxQ2QSV8TTX-sREK4DN8xDk5ExDDquPG2yxw7MjXyqhDaUQHPA9iKqTjxnavEOc2mzr_pUPvPNgA0Ax8MimxngJFgp-96mIsVJNGloRsXyJ3OJMQK3q9d_RLOqbPaiQzsK6BkUWXaxatUKAsUnlJwVpy5XX9nXhOgdlNV-h1fWU6vI9IoUdlkWU_ngDxfa6mvQXpGi_zUH',
                'city' => 'SANTO DOMINGO',
                'country' => 'DR',
            ],
        ];
    }
}
